<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200" x-data="{ applicants: [
                {first_name: 'Cyril'},
                {first_name: 'Venoir'},
                ] }"
                x-init="() => {
                    {{-- axios.get(); --}}
                }"
            >
                    <template x-for="(applicant, index) in applicants" :key="index">
                        <li x-text="applicant.first_name"></li>
                    </template>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
