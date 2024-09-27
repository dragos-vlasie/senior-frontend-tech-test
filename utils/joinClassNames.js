export function joinClassNames(...classes) {
    return classes.filter(Boolean).join(' '); // Remove empty classes
}