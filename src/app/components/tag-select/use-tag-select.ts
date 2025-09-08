import { useState } from 'react';
import { useRequest, useMemoizedFn, useUpdateEffect } from 'ahooks';
import { useRouter } from 'next/navigation'
import { Tag } from '@/app/types/project.type';
import { getTagListByJson } from '@/app/apis/project-api';


// Hook 返回值类型定义
export interface UseTagSelect {
    tags: Tag[];
    loading: boolean;
    error: Error | undefined;
    selectedTagId: string | undefined;
    onChangeTag: (tagId: string) => void;
}

const useTagSelect = (): UseTagSelect => {
    const router = useRouter()

    // 管理选中的标签状态
    const [selectedTagId, setSelectedTagId] = useState<string>();

    // 使用 ahooks 的 useRequest 获取标签数据
    const { data: tags = [], loading, error } = useRequest(
        async (): Promise<Tag[]> => {
            const data = await getTagListByJson()

            return data;
        },
        {
            cacheKey: 'tags-list', // 缓存键，避免重复请求
        }
    );

    const onChangeTag = useMemoizedFn((tagId) => {
        setSelectedTagId(tagId);
    })

    useUpdateEffect(() => {
        const selectedTag = tags.find((tag) => {
            return Number(selectedTagId) === tag.id
        })

        if (!!selectedTag) {
            router.push(`/search?keyword=${selectedTag.name}`)
        }
    }, [selectedTagId])

    return {
        tags,
        loading,
        error,
        selectedTagId,
        onChangeTag
    };
};

export default useTagSelect;