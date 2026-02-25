
export interface Block {
    title: string;
    content: string;
    list_items: {
        text: text
    }[];
    button_url: string;
    button_text: string;
    image?: string
};

export interface BlockWithMetrics extends Block {
    metrics: {
        icon?: string | null;
        number: string | number;
        description: string;
    }
}

export interface BlockWithMembers extends Block {
    members: Record<string, any>;
}
