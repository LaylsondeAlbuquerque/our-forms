export type QuestionType = 'texto curto' | 'texto longo' | 'multipla escolha' | 'caixas de seleção' | 'data' | 'upload de arquivo';

export interface Question {
    id: string;
    title:string;
    type: QuestionType;
    required: boolean;
    options: string[]; 
}