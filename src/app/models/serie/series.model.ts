// tslint:disable-next-line: class-name
export interface serieResponse {
    title: string;
    thumbnail: {
        extension: string;
        path: string;
    };
    id: string;
}
// tslint:disable-next-line: class-name
export interface detailSerie {
    data: {
        results: [
            {
                id: string;
                title: string;
                thumbnail: {
                    extension: string;
                    path: string
                };
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
        ]
    };
}
