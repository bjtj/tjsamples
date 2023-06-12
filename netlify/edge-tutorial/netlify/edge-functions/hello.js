export default async (request, context) => {
    return new Response('Hello world from edge!', {
        headers: {
            'content-type': 'text/html',
        }
    })
};