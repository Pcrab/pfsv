interface primaryTranslateText {
    english: string;
    chinese: string;
}

interface translateText extends primaryTranslateText {
    someLanguage?: string;
}

type translateKeys = "search" | "filename" | "confirm";

const translations: {
    [key in translateKeys]: translateText;
} = {
    search: {
        english: "Search",
        chinese: "搜索",
    },
    filename: {
        english: "Filename",
        chinese: "文件名",
    },
    confirm: {
        english: "Confirm",
        chinese: "确认",
    },
} as const;

const defaultLanguage: keyof primaryTranslateText = "english";
const translate = (text: keyof typeof translations): string => {
    let currentLanguage = localStorage.getItem("language");
    if (!currentLanguage) {
        currentLanguage = defaultLanguage;
        localStorage.setItem("language", defaultLanguage);
    }
    const currentLanguageTranslation =
        translations[text][currentLanguage as keyof translateText];
    if (!currentLanguageTranslation) {
        return translations[text][defaultLanguage];
    }
    return currentLanguageTranslation;
};

export default translate;
