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
                        query: null,
                        fromDate: null,
                        toDate: null,
                        totalRecords: null,
                        approvals: null,
                        approveButtonText: 'Approve',
                        firstCharacter(text) {
                            return text.substring(0, 1)
                        },
                        shorten(text) {
                            return (text.length > 27) ? `${text.substring(0, 27)} ...` : text
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
                        getApplicantIndex(applicantLabel) {
                            return this.applicants.findIndex(applicant => applicant.label === applicantLabel)

                        },
                        getApplicant(applicantLabel) {
                            const applicantIndex = this.getApplicantIndex(applicantLabel)
                            return this.applicants[applicantIndex]
                        },
                        replaceApplicant(applicantLabel, newApplicantData) {
                            const applicantIndex = this.getApplicantIndex(applicantLabel)
                            this.applicants.splice(applicantIndex, 1, newApplicantData)

                        },

                        noApplicant() {
                            return this.applicants.length < 1
                        },

                        focusSearch() {
                            const searchInput = this.$refs.searchinput
                            searchInput.focus()
                        },

                        async approveApplicant(applicant_id, applicantLabel){
                            if (applicant_id == null) return
                            const url = `/${applicant_id}`
                            const response = await axios.patch(url, {is_accepted: true})
                            if (!response.data.applicant) {
                                Swal.fire({
                                    toast: true,
                                    position: 'top-end',
                                    icon: 'error',
                                    timer: 5000,
                                    timerProgressBar: true,
                                    showConfirmButton: false,
                                    iconColor: '#F87171',
                                    text: response.data.message,
                                    title: 'Ooops!',
                                    customClass: {
                                      title: 'swal-title',
                                      loader: 'swal-loader',
                                      container: 'swal-container',
                                    }
                                })
                                return
                            }
                            this.totalRecords = response.data.totalRecords
                            this.approvals = response.data.approvals
                            const newApplicantData = response.data.applicant
                            this.replaceApplicant(applicantLabel, newApplicantData)
                        },

                        async gotoPage(url) {
                            if (url == null) return
                            const response = await axios.get(url)
                            const {data, total} = response.data.applicants
                            const {approvals, applicants} = response.data
                            this.applicants = data
                            this.totalRecords = total
                            this.approvals = approvals
                            this.pages = applicants.links
                        },
                        async loadAllApplicants() {
                            const response = await axios.get('/applicants')
                            this.applicants = response.data.applicants.data
                            this.totalRecords = response.data.applicants.total
                            this.pages = response.data.applicants.links
                            this.approvals = response.data.approvals
                        },

                        async performSearch() {

                            if (this.query == null || this.query.trim() == '') {
                                return this.loadAllApplicants()
                            }
                            const response = await axios.get('/s',{
                                params: {
                                    query: `${this.query}`,
                                    from: `${this.fromDate}`,
                                    to: `${this.toDate}`,
                                }
                            })
                            const {data, total} = response.data.applicants
                            const {approvals, applicants} = response.data
                            this.applicants = data
                            this.totalRecords = total
                            this.approvals = approvals
                            this.pages = applicants.links
                        }


                    }"
                    x-init="async () => {
                        const response = await axios.get('/applicants')
                        applicants = response.data.applicants.data
                        totalRecords = response.data.applicants.total
                        pages = response.data.applicants.links
                        approvals = response.data.approvals
                        let fromPicker = new Pikaday({
                            field: $refs.fromDate,
                            format: 'YYYY-MM-DD',
                            minDate: new Date(2021, 00, 22),
                            maxDate: new Date(),
                        })

                        let toPicker = new Pikaday({
                            field: $refs.toDate,
                            format: 'YYYY-MM-DD',
                            minDate: new Date(2021, 00, 02),
                            maxDate: new Date(),
                        })
                        fromPicker.setDate(new Date(2021, 00, 22))
                        toPicker.setDate(new Date())


                    }
                    "
                    @keydown.window.space="focusSearch"
                    >
                    <div class="flex font-medium text-white mb-4 justify-between">
                        <div class="bg-blue-500 w-64 py-2 text-center tracking-wide" x-text="`${totalRecords} Registered Applicants`"></div>
                        <div class="flex-1 px-4 tracking-wide">
                            <input class="w-full text-gray-800 py-2 border-2 border-gray-200" type="text" x-ref="searchinput" x-model="query" @keyup.debounce="performSearch()" placeholder="[space]...type your search">
                        </div>
                        <div class="bg-green-400 w-64 py-2 text-center tracking-wide" x-text="`${approvals} Approved Applicants`"></div>
                    </div>
                    <div class="flex font-medium text-white mb-4 justify-between text-gray-800">
                        <x-date-pickr model="fromDate" ref="fromDate">
                            From:
                        </x-date-pickr>

                        <x-date-pickr model="toDate" ref="toDate">
                            To:
                        </x-date-pickr>
                    </div>
                    <table class="w-full table-fixed text-sm mb-4">
                        <thead>
                          <tr class="tracking-wide">
                            <th class="w-10"></th>
                            <th>Full name</th>
                            <th class="w-10">Gender</th>
                            <th>Email</th>
                            <th class="w-32">Phone number</th>
                            <th class="w-10">Ilorin?</th>
                            {{-- <th class="w-56">Experience</th> --}}
                            {{-- <th class="w-24">Channel</th> --}}
                            <th class="w-40">Registered Date</th>
                            <th class="w-32">Action</th>
                          </tr>
                        </thead>
                        <tbody class="">
                            <template class="absolute bottom-0 right-0" x-for="(applicant, index) in applicants" :key="index">
                                <tr :class="{'bg-purple-100' : (index + 1) % 2 == 0}">
                                    <td class="border border-purple-200 px-4 py-2 " x-text="(index + 1)">Gender</td>
                                   <td class="w-24 border border-purple-200 px-4 py-2" x-text="`${applicant.first_name} ${applicant.last_name}`">Fullname</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="firstCharacter(applicant.gender)">Gender</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="applicant.email">Email</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="applicant.phone_number">Phone number</td>
                                   <td class="border border-purple-200 px-4 py-2" x-text="firstCharacter(applicant.stay_in_ilorin)">Stay around Ilorin?</td>
                                   {{-- <td class="border border-purple-200 px-4 py-2" x-text="shorten(applicant.experience)">Experience</td> --}}
                                   {{-- <td class="border border-purple-200 px-4 py-2" x-text="applicant.channel">Channel</td> --}}
                                   <td class="border border-purple-200 px-4 py-2" x-text="applicant.created_at">Registered Date</td>
                                   <td class="border border-purple-200 px-4 py-1">
                                    <button @click="approveApplicant(applicant.id, applicant.label)" x-show="applicant.is_accepted == 0" class="inline-flex items-center px-4 py-1 bg-gray-800 border border-transparent rounded-md font-mediumcm text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150" x-text="approveButtonText"></button>
                                   </td>
                                </tr>
                            </template>
                            <template x-if="noApplicant()">
                                <div class="absolute w-full text-center text-red-500 font-semibold text-lg py-2">Oops! search returns no result</div>
                            </template>

                        </tbody>
                    </table>
                    {{-- Pagination --}}
                    <template x-if="!noApplicant()" x-for="(page, index) in pages" :key="index">
                            <button x-show="page.url != null" class="focus:outline-none cursor-pointer rounded font-medium px-3 py-1 mx-2 bg-purple-100 text-purple-600" x-text="cleanPagesLabel(page.label)"
                            :class="{'bg-purple-300 text-white' : page.active}"
                            @click="gotoPage(page.url)"></button>
                    </template>
                    </div>
                    {{-- You're logged in! --}}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
