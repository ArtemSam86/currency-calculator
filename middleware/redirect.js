export default function ({ route, redirect }) {
    // If the user is not authenticated
    if (route.path === '/') {
        return redirect('/calculator')
    }
}
