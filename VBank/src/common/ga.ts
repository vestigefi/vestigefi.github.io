export const pageview = (url: string): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
