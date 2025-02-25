export interface QuestionTest {
  id: number;
  question: string;
  correctAnswer: 'A' | 'B' | 'C';
  answerA: string;
  answerB: string;
  answerC: string;
}
