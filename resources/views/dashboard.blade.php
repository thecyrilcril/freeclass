<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="p-6 bg-white border-b border-gray-200" x-data="
                    {
                        applicants: [],
                        firstCharacter(text) {
                            return text.substring(0, 1)
                        },
                        shorten(text) {
                            return (text.length > 36) ? `${text.substring(0, 36)} ...` : text
                        },
                    }"
                    x-init="async () => {
                        const response = await axios.get('/applicants')
                        applicants = response.data.applicants
                    }
"
                    >
                    <table class="w-full table-fixed text-sm">
                        <thead class="font-medium tracking-wide">
                          <tr>
                            <th>Fullname</th>
                            <th class="w-10">Gender</th>
                            <th>Email</th>
                            <th class="w-32">Phone number</th>
                            <th class="w-10">Ilorin?</th>
                            <th>Experience</th>
                            <th class="w-24">Channel</th>
                          </tr>
                        </thead>
                        <tbody class="">
                            <template x-for="(applicant, index) in applicants" :key="index">
                                <tr :class="{'bg-gray-100' : (index + 1) % 2 == 0}">
                                   <td class="w-24 border border-purple-200 px-4 py-2" x-text="`${applicant.first_name} ${applicant.last_name}`">Fullname</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="firstCharacter(applicant.gender)">Gender</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="applicant.email">Email</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="applicant.phone_number">Phone number</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="firstCharacter(applicant.stay_in_ilorin)">Stay around Ilorin?</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="shorten(applicant.experience)">Experience</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="applicant.channel">Channel</td>
                                </tr>
                            </template>

                        </tbody>
                    </table>
{{--                         <template x-for="(applicant, index) in applicants" :key="index">
                            <li x-text="applicant.first_name"></li>
                        </template> --}}
                    </div>
                    You're logged in!
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
