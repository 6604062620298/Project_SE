export async function GET() {
    console.log('test');
    return Response.json({
        name: 'pick',
        age: '18'
    })
}