export type QuestionType = 'short-text' | 'long-text' | 'multiple-choice' | 'checkboxes' | 'dropdown' | 'date' | 'file-upload';

export interface Question {
    id: string;
    title:string;
    type: QuestionType;
    required: boolean;
    options?: string[]; // For question types that have options
}