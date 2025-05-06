import {} from "react";
import cls from "./AddQuestionPage.module.css";
import { Button } from "../../components/Button";

export const AddQuestionPage = () => {
  return (
    <div>
      <h1 className={cls.formTitle}>Add new question</h1>

      <div className={cls.formContainer}>
        <form className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question</label>
            <textarea
              defaultValue="defolt valyu"
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
              defaultValue="defolt valyu"
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
              defaultValue="defolt valyu"
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
              defaultValue="defolt valyu"
              name="resources"
              cols="30"
              id="resourcesField"
              rows="5"
              required
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
            <input className={cls.checkbox} type="checkbox" name="clearbox" id="clearFormField" defaultValue={true} />
            <span>clear form after submitting?</span>
          </label>

          <Button>Add question</Button>
        </form>
      </div>
    </div>
  );
};
