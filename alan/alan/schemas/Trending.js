export default {
    name: "trending",
    title: "Trending",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{type: "image"}],
            options: {
                hotpost: true,
            }
        },
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "brand",
            title: "Brand",
            type: "string"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: "slug",
            options:{
                source: "name",
                maxLength: 90
            }
        },
        {
            name: "oldPrice",
            title: "OldPrice",
            type: "number"
        },
        {
            name: "currentPrice",
            title: "CurrentPrice",
            type: "number"
        },
        {
            name: "details",
            title: "Details",
            type: "string"
        }
    ]
}