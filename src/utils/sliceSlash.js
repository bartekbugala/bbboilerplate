export default function sliceSlash(string) {
    return string.replace(/^\/|\/$/g, '');
}