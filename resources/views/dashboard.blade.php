<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg h-sc relative">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="p-6 bg-white border-b border-gray-200" x-data="
                    {
                        applicants: [],
                        pages: [],
                        firstCharacter(text) {
                            return text.substring(0, 1)
                        },
                        shorten(text) {
                            return (text.length > 36) ? `${text.substring(0, 36)} ...` : text
                        },
                        cleanPagesLabel(text) {
                            if (text.toString().includes('Previous')) {
                                return '<<'
                            }
                            if (text.toString().includes('Next')) {
                                return '>>'

                            }
                            return text
                        },
                        async gotoPage(url) {
                            if (url == null) return
                            const response = await axios.get(url)
                            this.applicants = response.data.applicants.data
                            this.pages = response.data.applicants.links
                        }


                    }"
                    x-init="async () => {
                        const response = await axios.get('/applicants')
                        applicants = response.data.applicants.data
                        pages = response.data.applicants.links
                    }
"
                    >
                    <table class="w-full table-fixed text-sm mb-4">
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
                            <template class="absolute bottom-0 right-0" x-for="(applicant, index) in applicants" :key="index">
                                <tr :class="{'bg-purple-100' : (index + 1) % 2 == 0}">
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
                    <template x-for="(page, index) in pages" :key="index">
                            <button x-show="page.url != null" class="focus:outline-none cursor-pointer rounded font-medium px-3 py-1 mx-2 bg-purple-100 text-purple-600" x-text="cleanPagesLabel(page.label)"
                            :class="{'bg-purple-300 text-white' : page.active}"
                            @click=gotoPage(page.url)></button>
                    </template>
                    </div>
                    You're logged in!
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
