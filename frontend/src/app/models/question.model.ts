export type QuestionType = 'texto curto' | 'texto longo' | 'multipla escolha' | 'caixas de seleção' | 'data';

export interface Question {
    id: string;
    title:string;
    type: QuestionType;
    required: boolean;
    options: string[]; 
    data: string;
}