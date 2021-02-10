// tslint:disable-next-line: class-name
export interface comicsResponse {
    title: string;
    thumbnail: {
        extension: string;
        path: string;
    };
    id: string;
}
// tslint:disable-next-line: class-name
export interface detailComic {
                id: string;
                title: string;
                description: string;
                thumbnail: {
                    extension: string;
                    path: string
                };
                format: string;
                prices: [
                    {
                        price: string;
                        type: string
                    }
                ];
                series: {
                    name: string;
                    resourceURI: string
                }
                stories: {
                    items: [
                        {
                            resourceURI: string;
                            name: string;
                            type: string
                        }
                    ]
                }
                creators: {
                    items: [
                        {
                            name: string;
                            role: string
                        }
                    ]
                }
}
