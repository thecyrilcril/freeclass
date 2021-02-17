@props([
  'model',
  'ref'
])

<label>
{{ $slot }}
<input type="text" x-model.lazy="{{ $model }}" x-ref="{{ $ref }}" {{ $attributes->merge(['class' => 'border border-gray-300 font-sans text-sm ml-1']) }} @change="performSearch()">
{{-- @change="$dispatch('input', $event.target.value)" --}}
</label>
