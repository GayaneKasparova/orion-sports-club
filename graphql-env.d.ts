/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'ArticleModelContentField': {
        kind: 'UNION';
        name: 'ArticleModelContentField';
        fields: {};
        possibleTypes: 'FileListRecord' | 'ImageGalleryRecord' | 'ImageRecord' | 'PersonRecord' | 'RichTextRecord' | 'VideoExternalRecord' | 'VideoUploadRecord';
    };
    'ArticleModelContentFieldListListNonNullMultiLocaleField': {
        kind: 'OBJECT';
        name: 'ArticleModelContentFieldListListNonNullMultiLocaleField';
        fields: {
            'locale': { name: 'locale'; type: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; } };
            'value': {
                name: 'value';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'UNION'; name: 'ArticleModelContentField'; ofType: null; };
                        };
                    };
                }
            };
        };
    };
    'ArticleModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'ArticleModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'seoSettings';
            type: { kind: 'INPUT_OBJECT'; name: 'SeoFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'coverImage';
            type: { kind: 'INPUT_OBJECT'; name: 'FileFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'articleType';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'slug'; type: { kind: 'INPUT_OBJECT'; name: 'SlugFilter'; ofType: null; }; defaultValue: null }, {
            name: 'description';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'title'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'preview';
            type: { kind: 'INPUT_OBJECT'; name: 'JsonFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'apikey';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'ArticleModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'ArticleModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'ArticleModelOrderBy': {
        name: 'ArticleModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'articleType_ASC' | 'articleType_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC' | 'apikey_ASC' | 'apikey_DESC';
    };
    'ArticleRecord': {
        kind: 'OBJECT'; name: 'ArticleRecord'; fields: {
            '_allContentLocales': {
                name: '_allContentLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: {
                            kind: 'OBJECT';
                            name: 'ArticleModelContentFieldListListNonNullMultiLocaleField';
                            ofType: null;
                        };
                    };
                }
            };
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'apikey': { name: 'apikey'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'articleType': { name: 'articleType'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'content': {
                name: 'content';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'UNION'; name: 'ArticleModelContentField'; ofType: null; };
                        };
                    };
                }
            };
            'coverImage': { name: 'coverImage'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'BarRecord': {
        kind: 'OBJECT'; name: 'BarRecord'; fields: {
            '_allContentLocales': {
                name: '_allContentLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'copyContent': { name: 'copyContent'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'cover': { name: 'cover'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'roundmeLink': { name: 'roundmeLink'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'Boolean': unknown;
    'BooleanFilter': {
        kind: 'INPUT_OBJECT';
        name: 'BooleanFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'BooleanType': unknown;
    'BoxingSalonRecord': {
        kind: 'OBJECT'; name: 'BoxingSalonRecord'; fields: {
            '_allContentLocales': {
                name: '_allContentLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'copyContent': { name: 'copyContent'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'cover': { name: 'cover'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'roundmeLink': { name: 'roundmeLink'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'CollectionMetadata': {
        kind: 'OBJECT';
        name: 'CollectionMetadata';
        fields: {
            'count': {
                name: 'count';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
        };
    };
    'ColorBucketType': {
        name: 'ColorBucketType';
        enumValues: 'red' | 'orange' | 'pink' | 'cyan' | 'purple' | 'blue' | 'yellow' | 'green' | 'brown' | 'grey' | 'white' | 'black';
    };
    'ColorField': {
        kind: 'OBJECT';
        name: 'ColorField';
        fields: {
            'alpha': {
                name: 'alpha';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'blue': {
                name: 'blue';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'cssRgb': {
                name: 'cssRgb';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'green': {
                name: 'green';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'hex': {
                name: 'hex';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'red': {
                name: 'red';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
        };
    };
    'ContactModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'ContactModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'ContactModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'ContactModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'ContactModelOrderBy': {
        name: 'ContactModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC';
    };
    'ContactRecord': {
        kind: 'OBJECT'; name: 'ContactRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'CreatedAtFilter': {
        kind: 'INPUT_OBJECT';
        name: 'CreatedAtFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'CustomData': unknown;
    'Date': unknown;
    'DateFilter': {
        kind: 'INPUT_OBJECT';
        name: 'DateFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'Date'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'Date'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'eq';
            type: { kind: 'SCALAR'; name: 'Date'; ofType: null; };
            defaultValue: null
        }, { name: 'neq'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; }; defaultValue: null }];
    };
    'DateTime': unknown;
    'DemoPageRecord': {
        kind: 'OBJECT'; name: 'DemoPageRecord'; fields: {
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'bannerBackgroundImage': {
                name: 'bannerBackgroundImage';
                type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'DictionaryRecord': {
        kind: 'OBJECT'; name: 'DictionaryRecord'; fields: {
            '_allContactsLocales': {
                name: '_allContactsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeeMoreLocales': {
                name: '_allSeeMoreLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'contacts': { name: 'contacts'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'seeMore': { name: 'seeMore'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'EventModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'EventModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'banner'; type: { kind: 'INPUT_OBJECT'; name: 'FileFilter'; ofType: null; }; defaultValue: null }, {
            name: 'description';
            type: { kind: 'INPUT_OBJECT'; name: 'TextFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'title'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'EventModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'EventModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'EventModelOrderBy': {
        name: 'EventModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'title_ASC' | 'title_DESC';
    };
    'EventRecord': {
        kind: 'OBJECT'; name: 'EventRecord'; fields: {
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'banner': { name: 'banner'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'FaviconType': { name: 'FaviconType'; enumValues: 'icon' | 'appleTouchIcon' | 'msApplication'; };
    'FileField': {
        kind: 'OBJECT'; name: 'FileField'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'alt': { name: 'alt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'author': { name: 'author'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'basename': {
                name: 'basename';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'blurUpThumb': { name: 'blurUpThumb'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'blurhash': { name: 'blurhash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'colors': {
                name: 'colors';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'ColorField'; ofType: null; };
                        };
                    };
                }
            };
            'copyright': { name: 'copyright'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'customData': {
                name: 'customData';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'CustomData'; ofType: null; }; }
            };
            'exifInfo': {
                name: 'exifInfo';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'CustomData'; ofType: null; }; }
            };
            'filename': {
                name: 'filename';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'focalPoint': { name: 'focalPoint'; type: { kind: 'OBJECT'; name: 'focalPoint'; ofType: null; } };
            'format': {
                name: 'format';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'height': { name: 'height'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; }
            };
            'md5': {
                name: 'md5';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'mimeType': {
                name: 'mimeType';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'notes': { name: 'notes'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'responsiveImage': {
                name: 'responsiveImage';
                type: { kind: 'OBJECT'; name: 'ResponsiveImage'; ofType: null; }
            };
            'size': {
                name: 'size';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'smartTags': {
                name: 'smartTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; };
                        };
                    };
                }
            };
            'tags': {
                name: 'tags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; };
                        };
                    };
                }
            };
            'thumbhash': { name: 'thumbhash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'url': {
                name: 'url';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'video': { name: 'video'; type: { kind: 'OBJECT'; name: 'UploadVideoField'; ofType: null; } };
            'width': { name: 'width'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; } };
        };
    };
    'FileFieldInterface': {
        kind: 'INTERFACE'; name: 'FileFieldInterface'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'alt': { name: 'alt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'author': { name: 'author'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'basename': {
                name: 'basename';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'blurUpThumb': { name: 'blurUpThumb'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'blurhash': { name: 'blurhash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'colors': {
                name: 'colors';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'ColorField'; ofType: null; };
                        };
                    };
                }
            };
            'copyright': { name: 'copyright'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'customData': {
                name: 'customData';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'CustomData'; ofType: null; }; }
            };
            'exifInfo': {
                name: 'exifInfo';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'CustomData'; ofType: null; }; }
            };
            'filename': {
                name: 'filename';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'focalPoint': { name: 'focalPoint'; type: { kind: 'OBJECT'; name: 'focalPoint'; ofType: null; } };
            'format': {
                name: 'format';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'height': { name: 'height'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; }
            };
            'md5': {
                name: 'md5';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'mimeType': {
                name: 'mimeType';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'notes': { name: 'notes'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'responsiveImage': {
                name: 'responsiveImage';
                type: { kind: 'OBJECT'; name: 'ResponsiveImage'; ofType: null; }
            };
            'size': {
                name: 'size';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'smartTags': {
                name: 'smartTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; };
                        };
                    };
                }
            };
            'tags': {
                name: 'tags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; };
                        };
                    };
                }
            };
            'thumbhash': { name: 'thumbhash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'url': {
                name: 'url';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'video': { name: 'video'; type: { kind: 'OBJECT'; name: 'UploadVideoField'; ofType: null; } };
            'width': { name: 'width'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; } };
        }; possibleTypes: 'FileField';
    };
    'FileFieldMultiLocaleField': {
        kind: 'OBJECT';
        name: 'FileFieldMultiLocaleField';
        fields: {
            'locale': { name: 'locale'; type: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; } };
            'value': { name: 'value'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
        };
    };
    'FileFilter': {
        kind: 'INPUT_OBJECT';
        name: 'FileFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'FileListRecord': {
        kind: 'OBJECT'; name: 'FileListRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'files': {
                name: 'files';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'FileField'; ofType: null; };
                        };
                    };
                }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'Float': unknown;
    'FloatType': unknown;
    'GlobalRecord': {
        kind: 'OBJECT'; name: 'GlobalRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'logo': { name: 'logo'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'mail': { name: 'mail'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'phone': { name: 'phone'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'GlobalSeoField': {
        kind: 'OBJECT';
        name: 'GlobalSeoField';
        fields: {
            'facebookPageUrl': { name: 'facebookPageUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'fallbackSeo': { name: 'fallbackSeo'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'siteName': { name: 'siteName'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'titleSuffix': { name: 'titleSuffix'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'twitterAccount': { name: 'twitterAccount'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
        };
    };
    'HomePageModelFacilitiesField': {
        kind: 'UNION';
        name: 'HomePageModelFacilitiesField';
        fields: {};
        possibleTypes: 'BarRecord' | 'BoxingSalonRecord' | 'MeetingRoomRecord' | 'SportsClubRecord' | 'YogaStudioRecord';
    };
    'HomePageRecord': {
        kind: 'OBJECT'; name: 'HomePageRecord'; fields: {
            '_allAboutUsTextLocales': {
                name: '_allAboutUsTextLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allAboutUsTitleLocales': {
                name: '_allAboutUsTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allBannerBtnTextLocales': {
                name: '_allBannerBtnTextLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allBannerSubtitleLocales': {
                name: '_allBannerSubtitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allBannerTitleLocales': {
                name: '_allBannerTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allEventsTitleLocales': {
                name: '_allEventsTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allFacilitiesTitleLocales': {
                name: '_allFacilitiesTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allOrionFightingClubDescriptionLocales': {
                name: '_allOrionFightingClubDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allOrionFightingClubTitleLocales': {
                name: '_allOrionFightingClubTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTeamTitleLocales': {
                name: '_allTeamTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'aboutUsText': { name: 'aboutUsText'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'aboutUsTitle': { name: 'aboutUsTitle'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'bannerBackgroundImage': {
                name: 'bannerBackgroundImage';
                type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; }
            };
            'bannerBtnLink': { name: 'bannerBtnLink'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'bannerBtnText': { name: 'bannerBtnText'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'bannerSubtitle': { name: 'bannerSubtitle'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'bannerTitle': { name: 'bannerTitle'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'copyContent': { name: 'copyContent'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'events': {
                name: 'events';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'EventRecord'; ofType: null; };
                        };
                    };
                }
            };
            'eventsTitle': { name: 'eventsTitle'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'facilities': {
                name: 'facilities';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'UNION'; name: 'HomePageModelFacilitiesField'; ofType: null; };
                        };
                    };
                }
            };
            'facilitiesTitle': { name: 'facilitiesTitle'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'orionFightingClubDescription': {
                name: 'orionFightingClubDescription';
                type: { kind: 'SCALAR'; name: 'String'; ofType: null; }
            };
            'orionFightingClubTitle': {
                name: 'orionFightingClubTitle';
                type: { kind: 'SCALAR'; name: 'String'; ofType: null; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'team': {
                name: 'team';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'TrainerRecord'; ofType: null; };
                        };
                    };
                }
            };
            'teamTitle': { name: 'teamTitle'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'ImageGalleryRecord': {
        kind: 'OBJECT'; name: 'ImageGalleryRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'images': {
                name: 'images';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'FileField'; ofType: null; };
                        };
                    };
                }
            };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'ImageRecord': {
        kind: 'OBJECT'; name: 'ImageRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'image': { name: 'image'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'ImgixParams': {
        kind: 'INPUT_OBJECT';
        name: 'ImgixParams';
        isOneOf: false;
        inputFields: [{ name: 'ar'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'auto';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsAuto'; ofType: null; };
                };
            };
            defaultValue: null
        }, {
            name: 'bgRemoveFallback';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'bgRemoveFgType';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsBgRemoveFgType'; ofType: null; };
                };
            };
            defaultValue: null
        }, {
            name: 'bgRemoveSemiTransparency';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'bgRemove'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'bgReplaceFallback';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'bgReplaceNegPrompt';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'bgReplace'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'bg';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'blendAlign';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsBlendAlign'; ofType: null; };
                };
            };
            defaultValue: null
        }, { name: 'blendAlpha'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'blendColor';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'blendCrop';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsBlendCrop'; ofType: null; };
                };
            };
            defaultValue: null
        }, {
            name: 'blendFit';
            type: { kind: 'ENUM'; name: 'ImgixParamsBlendFit'; ofType: null; };
            defaultValue: null
        }, { name: 'blendH'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'blendMode';
            type: { kind: 'ENUM'; name: 'ImgixParamsBlendMode'; ofType: null; };
            defaultValue: null
        }, { name: 'blendPad'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'blendSize';
            type: { kind: 'ENUM'; name: 'ImgixParamsBlendSize'; ofType: null; };
            defaultValue: null
        }, { name: 'blendW'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'blendX';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'blendY'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'blend';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'blur'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'borderBottom';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'borderLeft'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'borderRadiusInner';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'borderRadius'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'borderRight';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'borderTop'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'border';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'bri'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'ch';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsCh'; ofType: null; };
                };
            };
            defaultValue: null
        }, { name: 'chromasub'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'colorquant';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'colors'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'con';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'cornerRadius'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'crop';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsCrop'; ofType: null; };
                };
            };
            defaultValue: null
        }, { name: 'cs'; type: { kind: 'ENUM'; name: 'ImgixParamsCs'; ofType: null; }; defaultValue: null }, {
            name: 'dl';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'dpi'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'dpr';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'duotoneAlpha'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'duotone';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'exp'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'expires';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'faceBlur'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'facePixel';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'faceindex'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'facepad';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'faces'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'fillColor';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGenFallback';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'fillGenNegPrompt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'fillGenPos';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsFillGenPos'; ofType: null; };
                };
            };
            defaultValue: null
        }, { name: 'fillGenPrompt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'fillGenSeed';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientCs';
            type: { kind: 'ENUM'; name: 'ImgixParamsFillGradientCs'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientLinearDirection';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsFillGradientLinearDirection'; ofType: null; };
                };
            };
            defaultValue: null
        }, {
            name: 'fillGradientLinear';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientRadialRadius';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientRadialX';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientRadialY';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientRadial';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'fillGradientType';
            type: { kind: 'ENUM'; name: 'ImgixParamsFillGradientType'; ofType: null; };
            defaultValue: null
        }, { name: 'fill'; type: { kind: 'ENUM'; name: 'ImgixParamsFill'; ofType: null; }; defaultValue: null }, {
            name: 'fit';
            type: { kind: 'ENUM'; name: 'ImgixParamsFit'; ofType: null; };
            defaultValue: null
        }, { name: 'flip'; type: { kind: 'ENUM'; name: 'ImgixParamsFlip'; ofType: null; }; defaultValue: null }, {
            name: 'fm';
            type: { kind: 'ENUM'; name: 'ImgixParamsFm'; ofType: null; };
            defaultValue: null
        }, { name: 'fpDebug'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'fpX';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'fpY'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'fpZ';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'fps'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'frame';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'gam'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'gifQ';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'gridColors'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'gridSize';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'h'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'high';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'htn'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'hue';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'interval'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'invert';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'iptc'; type: { kind: 'ENUM'; name: 'ImgixParamsIptc'; ofType: null; }; defaultValue: null }, {
            name: 'jpgProgressive';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'lpBlur'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'loop';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'lossless'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'markAlign';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsMarkAlign'; ofType: null; };
                };
            };
            defaultValue: null
        }, { name: 'markAlpha'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'markBase';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'markFit'; type: { kind: 'ENUM'; name: 'ImgixParamsMarkFit'; ofType: null; }; defaultValue: null }, {
            name: 'markH';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'markIfMinHeight'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'markIfMinWidth';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'markPad'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'markRot';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'markScale'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'markTile';
            type: { kind: 'ENUM'; name: 'ImgixParamsMarkTile'; ofType: null; };
            defaultValue: null
        }, { name: 'markW'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'markX';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'markY'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'mark';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'maskBg'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'mask';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'maxH'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'maxW';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'minH'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'minW';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'monochrome'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'nr';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'nrs'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'objectRemovalNegativePrompt';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'objectRemovalPrompt';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'objectRemovalRect'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'objectRemovalSeed';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'orient'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'padBottom';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'padLeft'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'padRight';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'padTop'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'pad';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'page'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'palette';
            type: { kind: 'ENUM'; name: 'ImgixParamsPalette'; ofType: null; };
            defaultValue: null
        }, {
            name: 'pdfAnnotation';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'prefix'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'px';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'q'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'rasterizeBypass';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'rect'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'reverse';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'rotType'; type: { kind: 'ENUM'; name: 'ImgixParamsRotType'; ofType: null; }; defaultValue: null }, {
            name: 'rot';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'sat'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'sepia';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'shad'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'sharp';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'skip'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'svgSanitize';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'transparency';
            type: { kind: 'ENUM'; name: 'ImgixParamsTransparency'; ofType: null; };
            defaultValue: null
        }, { name: 'trimAlpha'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'trimColor';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, { name: 'trimMd'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'trimPad';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'trimSd'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'trimTol';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'trim'; type: { kind: 'ENUM'; name: 'ImgixParamsTrim'; ofType: null; }; defaultValue: null }, {
            name: 'txtAlign';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsTxtAlign'; ofType: null; };
                };
            };
            defaultValue: null
        }, {
            name: 'txtClip';
            type: {
                kind: 'LIST';
                name: never;
                ofType: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'ENUM'; name: 'ImgixParamsTxtClip'; ofType: null; };
                };
            };
            defaultValue: null
        }, { name: 'txtColor'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'txtFit';
            type: { kind: 'ENUM'; name: 'ImgixParamsTxtFit'; ofType: null; };
            defaultValue: null
        }, { name: 'txtFont'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'txtLead';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'txtLineColor'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'txtLine';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'txtPad'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'txtShad';
            type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; };
            defaultValue: null
        }, { name: 'txtSize'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'txtTrack';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'txtWidth'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'txtX';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'txtY'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'txt';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'upscaleFallback';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'upscale'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'usm';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'usmrad'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'vib';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'w'; type: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; defaultValue: null }, {
            name: 'skipDefaultOptimizations';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }];
    };
    'ImgixParamsAuto': { name: 'ImgixParamsAuto'; enumValues: 'enhance' | 'format' | 'redeye' | 'compress'; };
    'ImgixParamsBgRemoveFgType': { name: 'ImgixParamsBgRemoveFgType'; enumValues: 'auto' | 'car'; };
    'ImgixParamsBlendAlign': {
        name: 'ImgixParamsBlendAlign';
        enumValues: 'top' | 'bottom' | 'middle' | 'left' | 'right' | 'center';
    };
    'ImgixParamsBlendCrop': {
        name: 'ImgixParamsBlendCrop';
        enumValues: 'top' | 'bottom' | 'left' | 'right' | 'faces';
    };
    'ImgixParamsBlendFit': { name: 'ImgixParamsBlendFit'; enumValues: 'clamp' | 'clip' | 'crop' | 'scale' | 'max'; };
    'ImgixParamsBlendMode': {
        name: 'ImgixParamsBlendMode';
        enumValues: 'color' | 'burn' | 'dodge' | 'darken' | 'difference' | 'exclusion' | 'hardlight' | 'hue' | 'lighten' | 'luminosity' | 'multiply' | 'overlay' | 'saturation' | 'screen' | 'softlight' | 'normal';
    };
    'ImgixParamsBlendSize': { name: 'ImgixParamsBlendSize'; enumValues: 'inherit'; };
    'ImgixParamsCh': { name: 'ImgixParamsCh'; enumValues: 'width' | 'dpr' | 'saveData'; };
    'ImgixParamsCrop': {
        name: 'ImgixParamsCrop';
        enumValues: 'top' | 'bottom' | 'left' | 'right' | 'faces' | 'entropy' | 'edges' | 'focalpoint';
    };
    'ImgixParamsCs': { name: 'ImgixParamsCs'; enumValues: 'origin' | 'srgb' | 'adobergb1998' | 'tinysrgb' | 'strip'; };
    'ImgixParamsFill': { name: 'ImgixParamsFill'; enumValues: 'solid' | 'blur' | 'gen' | 'generative' | 'gradient'; };
    'ImgixParamsFillGenPos': {
        name: 'ImgixParamsFillGenPos';
        enumValues: 'top' | 'bottom' | 'middle' | 'left' | 'right' | 'center';
    };
    'ImgixParamsFillGradientCs': {
        name: 'ImgixParamsFillGradientCs';
        enumValues: 'linear' | 'srgb' | 'oklab' | 'hsl' | 'lch';
    };
    'ImgixParamsFillGradientLinearDirection': {
        name: 'ImgixParamsFillGradientLinearDirection';
        enumValues: 'top' | 'bottom' | 'left' | 'right';
    };
    'ImgixParamsFillGradientType': { name: 'ImgixParamsFillGradientType'; enumValues: 'linear' | 'radial'; };
    'ImgixParamsFit': {
        name: 'ImgixParamsFit';
        enumValues: 'clamp' | 'clip' | 'crop' | 'facearea' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale';
    };
    'ImgixParamsFlip': { name: 'ImgixParamsFlip'; enumValues: 'h' | 'v' | 'hv'; };
    'ImgixParamsFm': {
        name: 'ImgixParamsFm';
        enumValues: 'gif' | 'jpg' | 'jp2' | 'json' | 'jxr' | 'pjpg' | 'mp4' | 'png' | 'png8' | 'png32' | 'webp' | 'webm' | 'blurhash' | 'avif';
    };
    'ImgixParamsIptc': { name: 'ImgixParamsIptc'; enumValues: 'allow' | 'block'; };
    'ImgixParamsMarkAlign': {
        name: 'ImgixParamsMarkAlign';
        enumValues: 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right';
    };
    'ImgixParamsMarkFit': { name: 'ImgixParamsMarkFit'; enumValues: 'clip' | 'crop' | 'fill' | 'max' | 'scale'; };
    'ImgixParamsMarkTile': { name: 'ImgixParamsMarkTile'; enumValues: 'grid'; };
    'ImgixParamsPalette': { name: 'ImgixParamsPalette'; enumValues: 'css' | 'json'; };
    'ImgixParamsRotType': { name: 'ImgixParamsRotType'; enumValues: 'pivot' | 'straighten'; };
    'ImgixParamsTransparency': { name: 'ImgixParamsTransparency'; enumValues: 'grid'; };
    'ImgixParamsTrim': { name: 'ImgixParamsTrim'; enumValues: 'auto' | 'color' | 'alpha'; };
    'ImgixParamsTxtAlign': {
        name: 'ImgixParamsTxtAlign';
        enumValues: 'top' | 'middle' | 'bottom' | 'left' | 'center' | 'right';
    };
    'ImgixParamsTxtClip': { name: 'ImgixParamsTxtClip'; enumValues: 'start' | 'middle' | 'end' | 'ellipsis'; };
    'ImgixParamsTxtFit': { name: 'ImgixParamsTxtFit'; enumValues: 'max'; };
    'InUseFilter': {
        kind: 'INPUT_OBJECT';
        name: 'InUseFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'Int': unknown;
    'IntType': unknown;
    'ItemId': unknown;
    'ItemIdFilter': {
        kind: 'INPUT_OBJECT';
        name: 'ItemIdFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'ItemStatus': { name: 'ItemStatus'; enumValues: 'draft' | 'updated' | 'published'; };
    'JsonField': unknown;
    'JsonFieldMultiLocaleField': {
        kind: 'OBJECT';
        name: 'JsonFieldMultiLocaleField';
        fields: {
            'locale': { name: 'locale'; type: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; } };
            'value': { name: 'value'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
        };
    };
    'JsonFilter': {
        kind: 'INPUT_OBJECT';
        name: 'JsonFilter';
        isOneOf: false;
        inputFields: [{
            name: 'exists';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }];
    };
    'LocalesFilter': {
        kind: 'INPUT_OBJECT';
        name: 'LocalesFilter';
        isOneOf: false;
        inputFields: [{
            name: 'allIn';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; }; };
            };
            defaultValue: null
        }, {
            name: 'anyIn';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; }; };
            };
            defaultValue: null
        }, {
            name: 'notIn';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; }; };
            };
            defaultValue: null
        }];
    };
    'MeetingRoomRecord': {
        kind: 'OBJECT'; name: 'MeetingRoomRecord'; fields: {
            '_allContentLocales': {
                name: '_allContentLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'copyContent': { name: 'copyContent'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'cover': { name: 'cover'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'roundmeLink': { name: 'roundmeLink'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'MetaTagAttributes': unknown;
    'MuxThumbnailFormatType': { name: 'MuxThumbnailFormatType'; enumValues: 'jpg' | 'png' | 'gif'; };
    'NavLinkModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'NavLinkModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'parent';
            type: { kind: 'INPUT_OBJECT'; name: 'ParentFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'position';
            type: { kind: 'INPUT_OBJECT'; name: 'PositionFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'openInNewTab';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'showIn';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'title'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'url';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'preview'; type: { kind: 'INPUT_OBJECT'; name: 'JsonFilter'; ofType: null; }; defaultValue: null }, {
            name: 'hide';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'NavLinkModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'NavLinkModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'NavLinkModelOrderBy': {
        name: 'NavLinkModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | 'position_ASC' | 'position_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'openInNewTab_ASC' | 'openInNewTab_DESC' | 'showIn_ASC' | 'showIn_DESC' | 'title_ASC' | 'title_DESC' | 'url_ASC' | 'url_DESC' | 'hide_ASC' | 'hide_DESC';
    };
    'NavLinkRecord': {
        kind: 'OBJECT'; name: 'NavLinkRecord'; fields: {
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allUrlLocales': {
                name: '_allUrlLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'children': {
                name: 'children';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'NavLinkRecord'; ofType: null; };
                        };
                    };
                }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'hide': {
                name: 'hide';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'openInNewTab': {
                name: 'openInNewTab';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            'parent': { name: 'parent'; type: { kind: 'OBJECT'; name: 'NavLinkRecord'; ofType: null; } };
            'position': { name: 'position'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; } };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'showIn': { name: 'showIn'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'url': { name: 'url'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
        };
    };
    'OrientationFilter': {
        kind: 'INPUT_OBJECT';
        name: 'OrientationFilter';
        isOneOf: false;
        inputFields: [{
            name: 'eq';
            type: { kind: 'ENUM'; name: 'UploadOrientation'; ofType: null; };
            defaultValue: null
        }, { name: 'neq'; type: { kind: 'ENUM'; name: 'UploadOrientation'; ofType: null; }; defaultValue: null }];
    };
    'PackageModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'PackageModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'name'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'description';
            type: { kind: 'INPUT_OBJECT'; name: 'TextFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'price'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'image';
            type: { kind: 'INPUT_OBJECT'; name: 'FileFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'PackageModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'PackageModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'PackageModelOrderBy': {
        name: 'PackageModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'name_ASC' | 'name_DESC' | 'price_ASC' | 'price_DESC';
    };
    'PackageRecord': {
        kind: 'OBJECT'; name: 'PackageRecord'; fields: {
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allNameLocales': {
                name: '_allNameLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'image': { name: 'image'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'price': { name: 'price'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'ParentFilter': {
        kind: 'INPUT_OBJECT';
        name: 'ParentFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; defaultValue: null }, {
            name: 'exists';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }];
    };
    'PersonRecord': {
        kind: 'OBJECT'; name: 'PersonRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'person': {
                name: 'person';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'TrainerRecord'; ofType: null; };
                        };
                    };
                }
            };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'PositionFilter': {
        kind: 'INPUT_OBJECT';
        name: 'PositionFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }];
    };
    'PromotionModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'PromotionModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_locales';
            type: { kind: 'INPUT_OBJECT'; name: 'LocalesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'description';
            type: { kind: 'INPUT_OBJECT'; name: 'TextFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'discount';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'image'; type: { kind: 'INPUT_OBJECT'; name: 'FileFilter'; ofType: null; }; defaultValue: null }, {
            name: 'title';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'validuntil';
            type: { kind: 'INPUT_OBJECT'; name: 'DateFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'PromotionModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'PromotionModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'PromotionModelOrderBy': {
        name: 'PromotionModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'discount_ASC' | 'discount_DESC' | 'title_ASC' | 'title_DESC' | 'validuntil_ASC' | 'validuntil_DESC';
    };
    'PromotionRecord': {
        kind: 'OBJECT'; name: 'PromotionRecord'; fields: {
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allImageLocales': {
                name: '_allImageLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'FileFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_locales': {
                name: '_locales';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; };
                        };
                    };
                }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'discount': { name: 'discount'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'image': { name: 'image'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'validuntil': { name: 'validuntil'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; } };
        };
    };
    'PublishedAtFilter': {
        kind: 'INPUT_OBJECT';
        name: 'PublishedAtFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'Query': {
        kind: 'OBJECT'; name: 'Query'; fields: {
            '_allArticlesMeta': {
                name: '_allArticlesMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allContactsMeta': {
                name: '_allContactsMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allEventsMeta': {
                name: '_allEventsMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allNavLinksMeta': {
                name: '_allNavLinksMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allPackagesMeta': {
                name: '_allPackagesMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allPromotionsMeta': {
                name: '_allPromotionsMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allSocialLinksMeta': {
                name: '_allSocialLinksMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allTrainersMeta': {
                name: '_allTrainersMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_allUploadsMeta': {
                name: '_allUploadsMeta';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: { kind: 'OBJECT'; name: 'CollectionMetadata'; ofType: null; };
                }
            };
            '_site': {
                name: '_site';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Site'; ofType: null; }; }
            };
            'allArticles': {
                name: 'allArticles';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'ArticleRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allContacts': {
                name: 'allContacts';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'ContactRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allEvents': {
                name: 'allEvents';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'EventRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allNavLinks': {
                name: 'allNavLinks';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'NavLinkRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allPackages': {
                name: 'allPackages';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'PackageRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allPromotions': {
                name: 'allPromotions';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'PromotionRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allSocialLinks': {
                name: 'allSocialLinks';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'SocialLinkRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allTrainers': {
                name: 'allTrainers';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'TrainerRecord'; ofType: null; };
                        };
                    };
                }
            };
            'allUploads': {
                name: 'allUploads';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'FileField'; ofType: null; };
                        };
                    };
                }
            };
            'article': { name: 'article'; type: { kind: 'OBJECT'; name: 'ArticleRecord'; ofType: null; } };
            'bar': { name: 'bar'; type: { kind: 'OBJECT'; name: 'BarRecord'; ofType: null; } };
            'boxingSalon': { name: 'boxingSalon'; type: { kind: 'OBJECT'; name: 'BoxingSalonRecord'; ofType: null; } };
            'contact': { name: 'contact'; type: { kind: 'OBJECT'; name: 'ContactRecord'; ofType: null; } };
            'demoPage': { name: 'demoPage'; type: { kind: 'OBJECT'; name: 'DemoPageRecord'; ofType: null; } };
            'dictionary': { name: 'dictionary'; type: { kind: 'OBJECT'; name: 'DictionaryRecord'; ofType: null; } };
            'event': { name: 'event'; type: { kind: 'OBJECT'; name: 'EventRecord'; ofType: null; } };
            'global': { name: 'global'; type: { kind: 'OBJECT'; name: 'GlobalRecord'; ofType: null; } };
            'homePage': { name: 'homePage'; type: { kind: 'OBJECT'; name: 'HomePageRecord'; ofType: null; } };
            'meetingRoom': { name: 'meetingRoom'; type: { kind: 'OBJECT'; name: 'MeetingRoomRecord'; ofType: null; } };
            'navLink': { name: 'navLink'; type: { kind: 'OBJECT'; name: 'NavLinkRecord'; ofType: null; } };
            'package': { name: 'package'; type: { kind: 'OBJECT'; name: 'PackageRecord'; ofType: null; } };
            'promotion': { name: 'promotion'; type: { kind: 'OBJECT'; name: 'PromotionRecord'; ofType: null; } };
            'socialLink': { name: 'socialLink'; type: { kind: 'OBJECT'; name: 'SocialLinkRecord'; ofType: null; } };
            'sportsClub': { name: 'sportsClub'; type: { kind: 'OBJECT'; name: 'SportsClubRecord'; ofType: null; } };
            'trainer': { name: 'trainer'; type: { kind: 'OBJECT'; name: 'TrainerRecord'; ofType: null; } };
            'upload': { name: 'upload'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'yogaStudio': { name: 'yogaStudio'; type: { kind: 'OBJECT'; name: 'YogaStudioRecord'; ofType: null; } };
        };
    };
    'RecordInterface': {
        kind: 'INTERFACE';
        name: 'RecordInterface';
        fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
        };
        possibleTypes: 'ArticleRecord' | 'BarRecord' | 'BoxingSalonRecord' | 'ContactRecord' | 'DemoPageRecord' | 'DictionaryRecord' | 'EventRecord' | 'FileListRecord' | 'GlobalRecord' | 'HomePageRecord' | 'ImageGalleryRecord' | 'ImageRecord' | 'MeetingRoomRecord' | 'NavLinkRecord' | 'PackageRecord' | 'PersonRecord' | 'PromotionRecord' | 'RichTextRecord' | 'SocialLinkRecord' | 'SportsClubRecord' | 'TrainerRecord' | 'VideoExternalRecord' | 'VideoUploadRecord' | 'YogaStudioRecord';
    };
    'ResolutionFilter': {
        kind: 'INPUT_OBJECT';
        name: 'ResolutionFilter';
        isOneOf: false;
        inputFields: [{
            name: 'eq';
            type: { kind: 'ENUM'; name: 'ResolutionType'; ofType: null; };
            defaultValue: null
        }, { name: 'neq'; type: { kind: 'ENUM'; name: 'ResolutionType'; ofType: null; }; defaultValue: null }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ResolutionType'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ResolutionType'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'ResolutionType': { name: 'ResolutionType'; enumValues: 'icon' | 'small' | 'medium' | 'large'; };
    'ResponsiveImage': {
        kind: 'OBJECT'; name: 'ResponsiveImage'; fields: {
            'alt': { name: 'alt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'aspectRatio': {
                name: 'aspectRatio';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; }
            };
            'base64': { name: 'base64'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'bgColor': { name: 'bgColor'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'height': {
                name: 'height';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'sizes': {
                name: 'sizes';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'src': {
                name: 'src';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'srcSet': {
                name: 'srcSet';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'webpSrcSet': {
                name: 'webpSrcSet';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'width': {
                name: 'width';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
        };
    };
    'RichTextRecord': {
        kind: 'OBJECT'; name: 'RichTextRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'body': { name: 'body'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'SeoField': {
        kind: 'OBJECT';
        name: 'SeoField';
        fields: {
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'image': { name: 'image'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'noIndex': { name: 'noIndex'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'twitterCard': { name: 'twitterCard'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
        };
    };
    'SeoFieldMultiLocaleField': {
        kind: 'OBJECT';
        name: 'SeoFieldMultiLocaleField';
        fields: {
            'locale': { name: 'locale'; type: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; } };
            'value': { name: 'value'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
        };
    };
    'SeoFilter': {
        kind: 'INPUT_OBJECT';
        name: 'SeoFilter';
        isOneOf: false;
        inputFields: [{
            name: 'exists';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }];
    };
    'Site': {
        kind: 'OBJECT';
        name: 'Site';
        fields: {
            'favicon': { name: 'favicon'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'faviconMetaTags': {
                name: 'faviconMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            'globalSeo': { name: 'globalSeo'; type: { kind: 'OBJECT'; name: 'GlobalSeoField'; ofType: null; } };
            'locales': {
                name: 'locales';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; };
                        };
                    };
                }
            };
            'noIndex': { name: 'noIndex'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; } };
        };
    };
    'SiteLocale': { name: 'SiteLocale'; enumValues: 'en' | 'ru' | 'hy' | 'fr'; };
    'SlugFilter': {
        kind: 'INPUT_OBJECT';
        name: 'SlugFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'SocialLinkModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'SocialLinkModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'position';
            type: { kind: 'INPUT_OBJECT'; name: 'PositionFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'icon'; type: { kind: 'INPUT_OBJECT'; name: 'FileFilter'; ofType: null; }; defaultValue: null }, {
            name: 'url';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'name'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'SocialLinkModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'SocialLinkModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'SocialLinkModelOrderBy': {
        name: 'SocialLinkModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | 'position_ASC' | 'position_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'url_ASC' | 'url_DESC' | 'name_ASC' | 'name_DESC';
    };
    'SocialLinkRecord': {
        kind: 'OBJECT'; name: 'SocialLinkRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'icon': { name: 'icon'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'position': { name: 'position'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'url': { name: 'url'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
        };
    };
    'SportsClubRecord': {
        kind: 'OBJECT'; name: 'SportsClubRecord'; fields: {
            '_allContentLocales': {
                name: '_allContentLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'copyContent': { name: 'copyContent'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'cover': { name: 'cover'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'roundmeLink': { name: 'roundmeLink'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'StatusFilter': {
        kind: 'INPUT_OBJECT';
        name: 'StatusFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'String': unknown;
    'StringFilter': {
        kind: 'INPUT_OBJECT';
        name: 'StringFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'isBlank'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'isPresent';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'StringMatchesFilter': {
        kind: 'INPUT_OBJECT';
        name: 'StringMatchesFilter';
        isOneOf: false;
        inputFields: [{
            name: 'pattern';
            type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'caseSensitive';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: "false"
        }, { name: 'regexp'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: "true" }];
    };
    'StringMultiLocaleField': {
        kind: 'OBJECT';
        name: 'StringMultiLocaleField';
        fields: {
            'locale': { name: 'locale'; type: { kind: 'ENUM'; name: 'SiteLocale'; ofType: null; } };
            'value': { name: 'value'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
        };
    };
    'Tag': {
        kind: 'OBJECT';
        name: 'Tag';
        fields: {
            'attributes': { name: 'attributes'; type: { kind: 'SCALAR'; name: 'MetaTagAttributes'; ofType: null; } };
            'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'tag': {
                name: 'tag';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
        };
    };
    'TextFilter': {
        kind: 'INPUT_OBJECT';
        name: 'TextFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'isBlank'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }, {
            name: 'isPresent';
            type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'TrainerModelFilter': {
        kind: 'INPUT_OBJECT';
        name: 'TrainerModelFilter';
        isOneOf: false;
        inputFields: [{
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'CreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'ItemIdFilter'; ofType: null; }; defaultValue: null }, {
            name: '_firstPublishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publicationScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_unpublishingScheduledAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_publishedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'PublishedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_status';
            type: { kind: 'INPUT_OBJECT'; name: 'StatusFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_isValid';
            type: { kind: 'INPUT_OBJECT'; name: 'BooleanFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'specialization';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'bio'; type: { kind: 'INPUT_OBJECT'; name: 'TextFilter'; ofType: null; }; defaultValue: null }, {
            name: 'photo';
            type: { kind: 'INPUT_OBJECT'; name: 'FileFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'slug'; type: { kind: 'INPUT_OBJECT'; name: 'SlugFilter'; ofType: null; }; defaultValue: null }, {
            name: 'title';
            type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'name'; type: { kind: 'INPUT_OBJECT'; name: 'StringFilter'; ofType: null; }; defaultValue: null }, {
            name: 'OR';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'TrainerModelFilter'; ofType: null; };
            };
            defaultValue: null
        }, {
            name: 'AND';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'INPUT_OBJECT'; name: 'TrainerModelFilter'; ofType: null; };
            };
            defaultValue: null
        }];
    };
    'TrainerModelOrderBy': {
        name: 'TrainerModelOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | '_firstPublishedAt_ASC' | '_firstPublishedAt_DESC' | '_publicationScheduledAt_ASC' | '_publicationScheduledAt_DESC' | '_unpublishingScheduledAt_ASC' | '_unpublishingScheduledAt_DESC' | '_publishedAt_ASC' | '_publishedAt_DESC' | '_status_ASC' | '_status_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | '_isValid_ASC' | '_isValid_DESC' | 'specialization_ASC' | 'specialization_DESC' | 'title_ASC' | 'title_DESC' | 'name_ASC' | 'name_DESC';
    };
    'TrainerRecord': {
        kind: 'OBJECT'; name: 'TrainerRecord'; fields: {
            '_allBioLocales': {
                name: '_allBioLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allNameLocales': {
                name: '_allNameLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSpecializationLocales': {
                name: '_allSpecializationLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'bio': { name: 'bio'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'photo': { name: 'photo'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'specialization': { name: 'specialization'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'TypeFilter': {
        kind: 'INPUT_OBJECT';
        name: 'TypeFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'ENUM'; name: 'UploadType'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'ENUM'; name: 'UploadType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'UploadType'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'UploadType'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UpdatedAtFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UpdatedAtFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'UploadAltFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadAltFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'UploadAuthorFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadAuthorFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'UploadBasenameFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadBasenameFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }];
    };
    'UploadColorsFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadColorsFilter';
        isOneOf: false;
        inputFields: [{
            name: 'contains';
            type: { kind: 'ENUM'; name: 'ColorBucketType'; ofType: null; };
            defaultValue: null
        }, {
            name: 'allIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ColorBucketType'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'anyIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ColorBucketType'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ColorBucketType'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'eq';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'ENUM'; name: 'ColorBucketType'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UploadCopyrightFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadCopyrightFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'UploadCreatedAtFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadCreatedAtFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'lt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'gt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'gte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }];
    };
    'UploadFilenameFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadFilenameFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }];
    };
    'UploadFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadFilter';
        isOneOf: false;
        inputFields: [{
            name: 'type';
            type: { kind: 'INPUT_OBJECT'; name: 'TypeFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'inUse'; type: { kind: 'INPUT_OBJECT'; name: 'InUseFilter'; ofType: null; }; defaultValue: null }, {
            name: 'resolution';
            type: { kind: 'INPUT_OBJECT'; name: 'ResolutionFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'size';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadSizeFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'tags';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadTagsFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'smartTags';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadTagsFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'colors';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadColorsFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'orientation';
            type: { kind: 'INPUT_OBJECT'; name: 'OrientationFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'id'; type: { kind: 'INPUT_OBJECT'; name: 'UploadIdFilter'; ofType: null; }; defaultValue: null }, {
            name: 'mimeType';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadMimeTypeFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'format';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadFormatFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'height';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadHeightFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'width';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadWidthFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'alt';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadAltFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'title';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadTitleFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notes';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadNotesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'md5';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadMd5Filter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'author';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadAuthorFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'copyright';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadCopyrightFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'basename';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadBasenameFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'filename';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadFilenameFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_createdAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadCreatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: '_updatedAt';
            type: { kind: 'INPUT_OBJECT'; name: 'UploadUpdatedAtFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'OR';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'UploadFilter'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'AND';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'UploadFilter'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UploadFormatFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadFormatFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UploadHeightFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadHeightFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }];
    };
    'UploadId': unknown;
    'UploadIdFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadIdFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'UploadId'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UploadMd5Filter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadMd5Filter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UploadMimeTypeFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadMimeTypeFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }];
    };
    'UploadNotesFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadNotesFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'UploadOrderBy': {
        name: 'UploadOrderBy';
        enumValues: '_createdAt_ASC' | '_createdAt_DESC' | 'size_ASC' | 'size_DESC' | 'resolution_ASC' | 'resolution_DESC' | 'filename_ASC' | 'filename_DESC' | 'basename_ASC' | 'basename_DESC' | 'mimeType_ASC' | 'mimeType_DESC' | 'format_ASC' | 'format_DESC' | '_updatedAt_ASC' | '_updatedAt_DESC' | 'id_ASC' | 'id_DESC';
    };
    'UploadOrientation': { name: 'UploadOrientation'; enumValues: 'landscape' | 'portrait' | 'square'; };
    'UploadSizeFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadSizeFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }];
    };
    'UploadTagsFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadTagsFilter';
        isOneOf: false;
        inputFields: [{
            name: 'contains';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'allIn';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            };
            defaultValue: null
        }, {
            name: 'anyIn';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            };
            defaultValue: null
        }, {
            name: 'notIn';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            };
            defaultValue: null
        }, {
            name: 'eq';
            type: {
                kind: 'LIST';
                name: never;
                ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            };
            defaultValue: null
        }];
    };
    'UploadTitleFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadTitleFilter';
        isOneOf: false;
        inputFields: [{
            name: 'matches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, {
            name: 'notMatches';
            type: { kind: 'INPUT_OBJECT'; name: 'StringMatchesFilter'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'String'; ofType: null; };
            defaultValue: null
        }, {
            name: 'in';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, {
            name: 'notIn';
            type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; };
            defaultValue: null
        }, { name: 'exists'; type: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; defaultValue: null }];
    };
    'UploadType': {
        name: 'UploadType';
        enumValues: 'image' | 'audio' | 'video' | 'richtext' | 'presentation' | 'spreadsheet' | 'pdfdocument' | 'archive';
    };
    'UploadUpdatedAtFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadUpdatedAtFilter';
        isOneOf: false;
        inputFields: [{ name: 'eq'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'lt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }, { name: 'gt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, {
            name: 'gte';
            type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; };
            defaultValue: null
        }];
    };
    'UploadVideoField': {
        kind: 'OBJECT'; name: 'UploadVideoField'; fields: {
            'alt': { name: 'alt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'blurUpThumb': { name: 'blurUpThumb'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'blurhash': { name: 'blurhash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'duration': { name: 'duration'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } };
            'framerate': { name: 'framerate'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } };
            'height': {
                name: 'height';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'mp4Url': { name: 'mp4Url'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'muxAssetId': {
                name: 'muxAssetId';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'muxPlaybackId': {
                name: 'muxPlaybackId';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'streamingUrl': {
                name: 'streamingUrl';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'thumbhash': { name: 'thumbhash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'thumbnailUrl': {
                name: 'thumbnailUrl';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'width': {
                name: 'width';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
        };
    };
    'UploadWidthFilter': {
        kind: 'INPUT_OBJECT';
        name: 'UploadWidthFilter';
        isOneOf: false;
        inputFields: [{ name: 'gt'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lt';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'gte'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'lte';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }, { name: 'eq'; type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; defaultValue: null }, {
            name: 'neq';
            type: { kind: 'SCALAR'; name: 'IntType'; ofType: null; };
            defaultValue: null
        }];
    };
    'VideoExternalRecord': {
        kind: 'OBJECT'; name: 'VideoExternalRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'videoUrl': { name: 'videoUrl'; type: { kind: 'OBJECT'; name: 'VideoField'; ofType: null; } };
        };
    };
    'VideoField': {
        kind: 'OBJECT';
        name: 'VideoField';
        fields: {
            'height': {
                name: 'height';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
            'provider': {
                name: 'provider';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'providerUid': {
                name: 'providerUid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'thumbnailUrl': {
                name: 'thumbnailUrl';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'title': {
                name: 'title';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'url': {
                name: 'url';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            'width': {
                name: 'width';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'IntType'; ofType: null; }; }
            };
        };
    };
    'VideoMp4Res': { name: 'VideoMp4Res'; enumValues: 'low' | 'medium' | 'high'; };
    'VideoUploadRecord': {
        kind: 'OBJECT'; name: 'VideoUploadRecord'; fields: {
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'apikey': { name: 'apikey'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'videoFile': { name: 'videoFile'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
        };
    };
    'YogaStudioRecord': {
        kind: 'OBJECT'; name: 'YogaStudioRecord'; fields: {
            '_allContentLocales': {
                name: '_allContentLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allDescriptionLocales': {
                name: '_allDescriptionLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allPreviewLocales': {
                name: '_allPreviewLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'JsonFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allSeoSettingsLocales': {
                name: '_allSeoSettingsLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'SeoFieldMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_allTitleLocales': {
                name: '_allTitleLocales';
                type: {
                    kind: 'LIST';
                    name: never;
                    ofType: {
                        kind: 'NON_NULL';
                        name: never;
                        ofType: { kind: 'OBJECT'; name: 'StringMultiLocaleField'; ofType: null; };
                    };
                }
            };
            '_createdAt': {
                name: '_createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_editingUrl': { name: '_editingUrl'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            '_firstPublishedAt': {
                name: '_firstPublishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_isValid': {
                name: '_isValid';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'BooleanType'; ofType: null; }; }
            };
            '_modelApiKey': {
                name: '_modelApiKey';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }
            };
            '_publicationScheduledAt': {
                name: '_publicationScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_publishedAt': {
                name: '_publishedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            '_seoMetaTags': {
                name: '_seoMetaTags';
                type: {
                    kind: 'NON_NULL';
                    name: never;
                    ofType: {
                        kind: 'LIST';
                        name: never;
                        ofType: {
                            kind: 'NON_NULL';
                            name: never;
                            ofType: { kind: 'OBJECT'; name: 'Tag'; ofType: null; };
                        };
                    };
                }
            };
            '_status': {
                name: '_status';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'ItemStatus'; ofType: null; }; }
            };
            '_unpublishingScheduledAt': {
                name: '_unpublishingScheduledAt';
                type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }
            };
            '_updatedAt': {
                name: '_updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'content': { name: 'content'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'copyContent': { name: 'copyContent'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'cover': { name: 'cover'; type: { kind: 'OBJECT'; name: 'FileField'; ofType: null; } };
            'createdAt': {
                name: 'createdAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
            'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'id': {
                name: 'id';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ItemId'; ofType: null; }; }
            };
            'preview': { name: 'preview'; type: { kind: 'SCALAR'; name: 'JsonField'; ofType: null; } };
            'roundmeLink': { name: 'roundmeLink'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'seoSettings': { name: 'seoSettings'; type: { kind: 'OBJECT'; name: 'SeoField'; ofType: null; } };
            'slug': { name: 'slug'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } };
            'updatedAt': {
                name: 'updatedAt';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; }
            };
        };
    };
    'focalPoint': {
        kind: 'OBJECT';
        name: 'focalPoint';
        fields: {
            'x': {
                name: 'x';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; }
            };
            'y': {
                name: 'y';
                type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'FloatType'; ofType: null; }; }
            };
        };
    };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
    name: never;
    query: 'Query';
    mutation: never;
    subscription: never;
    types: introspection_types;
};

declare module 'gql.tada' {
    interface setupSchema {
        introspection: introspection
    }
}