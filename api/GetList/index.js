module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        body: ["Jarod", "Hannah", "Kevin", "Mitch","Colby", "Hello world", "New API Change by Tim", "Hello world v2", "Api change now it should fail"]
    }
};