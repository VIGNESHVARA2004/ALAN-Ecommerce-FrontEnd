export default {
    name: "product",
    title: "Product",
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
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            initialValue: "Men",
            options:{
                list : [
                    { title: 'Men', value: 'men'},
                    { title: 'Women', value: 'women'},
                    { title: 'Kids', value: 'kids'},
                    { title: 'Footwear', value: 'footwear'},
                ]
            }
        }
    ]
}