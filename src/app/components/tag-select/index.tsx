"use client"

import React from 'react'
import TagSelectView from "./tag-select-view";
import useTagSelect from "./use-tag-select";

const TagSelect = () => {
    const { tags, selectedTagId, error, loading, onChangeTag } = useTagSelect();

    return (
        <TagSelectView 
            tags={tags} 
            selectedTagId={selectedTagId}
            onChange={onChangeTag}
            loading={loading}
            error={error}
        />
    )
};

export default React.memo(TagSelect)