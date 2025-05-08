import {} from "react";
import { Button } from "../Button";
import cls from "./QuestionForm.module.css";

export const QuestionForm = ({ formAction, formState, isPending, submitBtnText }) => {
  return (
    <div>
      <form action={formAction} className={cls.form}>
        <input type="text" name="questionId" defaultValue={formState.id} hidden />

        <div className={cls.formControl}>
          <label htmlFor="questionField">Question</label>
          <textarea
            defaultValue={formState.question}
            name="question"
            cols="30"
            id="questionField"
            rows="2"
            required
            placeholder="please enter a question"
          ></textarea>
        </div>
        <div className={cls.formControl}>
          <label htmlFor="answerField">Answer</label>
          <textarea
            defaultValue={formState.answer}
            name="answer"
            cols="30"
            id="answerField"
            rows="2"
            required
            placeholder="please enter a short answer"
          ></textarea>
        </div>
        <div className={cls.formControl}>
          <label htmlFor="descriptionField">description</label>
          <textarea
            defaultValue={formState.description}
            name="description"
            cols="30"
            id="descriptionField"
            rows="5"
            required
            placeholder="please enter a full description"
          ></textarea>
        </div>
        <div className={cls.formControl}>
          <label htmlFor="resourcesField">resources</label>
          <textarea
            defaultValue={formState.resources}
            name="resources"
            cols="30"
            id="resourcesField"
            rows="5"
            placeholder="please enter a resources separated by commas"
          ></textarea>
          <div>
            <label htmlFor="levelField">Level: </label>
            <select name="level" defaultValue={"1"}>
              <option disabled>Question level</option>
              <hr />
              <option value="1">1 - easiest</option>
              <option value="2">2 - medium</option>
              <option value="3">3 - hardest</option>
            </select>
          </div>
        </div>

        <label htmlFor="clearFormField" className={cls.clearFormControl}>
          <input
            className={cls.checkbox}
            type="checkbox"
            name="clearForm"
            id="clearFormField"
            defaultValue={formState.clearForm}
          />
          <span>clear form after submitting?</span>
        </label>

        <Button isDisabled={isPending}>{submitBtnText}</Button>
      </form>
    </div>
  );
};
