export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: '제목'
        },
        {
            name: 'content',
            title: "내용",
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' },
                            { title: "Underline", value: "underline" },
                            { title: "Strike", value: "strike-through" },
                        ],
                    }
                },
            ]
        }
    ]
}