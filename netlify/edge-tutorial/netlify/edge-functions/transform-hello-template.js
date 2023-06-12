export default async (request, context) => {
    const url = new URL(request.url);

    if (url.searchParams.get('method') !== 'transform') {
        return;
    }

    const response = await context.next();
    const page = await response.text();

    const regex = /LOCATION_UNKNOWN/;

    const location = `${context.geo.city}, ${context.geo.country.name}`;

    const updatedPage = page.replace(regex, location);

    return new Response(updatedPage, response);
}