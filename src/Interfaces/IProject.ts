export default interface IProject {
    id: number;
    title: string;
    titleHref: string;
    subtext: string;
    actionText: string;
    actionHref: string;
    logoHref: string;
    logoAlt: string;
    actionOnClick?: any;
}
