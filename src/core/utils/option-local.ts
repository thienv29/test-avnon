import { Answer } from "../data/answer.model";
import { Question } from "../data/question.model";

export default function toAnswer(question: Question){
    const answer: Answer = new Answer();
    answer.question = question.question;
    answer.answer ="";
    answer.answerFormat = question.answerFormat;
    answer.answerOptions = question.answerOptions?.map(option => {
        return {answer: option, checked: false}
    })
    answer.answerRequrie =question.answerRequire
    answer.otherAnswer =question.otherAnswer
    return answer;
}
