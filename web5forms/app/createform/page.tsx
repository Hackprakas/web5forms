"use client"
import { useState } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState<{ typess: string; text: string; label: string }[]>([]);

  const addQuestion = (typess: string, label: string) => {
    setQuestions([...questions, { typess, text: '', label }]);
  };

  const [options, setOptions] = useState(['']); 

  const handleAddOption = () => {
    setOptions([...options, '']); // Add a new empty option
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        {questions.map((question, index) => (
          <div key={index}>
            <label htmlFor={`question-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{`Question ${index + 1}`}</label>
            {question.typess === 'paragraph' && (
              <div className="mb-5">
                <label htmlFor={`input-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{question.label}</label>
                <input
                  type="text"
                  id={`input-${index}`}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder={question.label}
                  required
                />
              </div>
            )}
            {question.typess === 'largepara' && (
              <div className="mb-5">
                <label htmlFor={`large-input-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{question.label}</label>
                <input
                  type="text"
                  id={`large-input-${index}`}
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={question.label}
                />
              </div>
            )}
            {question.typess === 'multipleChoice' && (
              <fieldset>
                <div>
                  <label htmlFor={question.label}>{question.label}</label><br />

                  {/* Render radio options dynamically */}
                  {options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={`${question.label}_option${index + 1}`}
                        name={question.label}
                        value={`option${index + 1}`}
                        checked={index === 0} // Check the first option by default
                      />
                      <label htmlFor={`${question.label}_option${index + 1}`}>
                        <input
                          type="text"
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) => handleOptionChange(index, e.target.value)}
                        />
                      </label>
                      <br />
                    </div>
                  ))}

                  {/* Add option button */}
                  <button type="button" onClick={handleAddOption}>
                    Add Option
                  </button>
                </div>
              </fieldset>
            )}

          </div>
        ))}

        <div className="mb-5">
          <button
            type="button"
            onClick={() => {
              const label = prompt('Enter label name for paragraph question');
              if (label !== null) {
                addQuestion('paragraph', label);
              }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add small para Question
          </button>
          <button
            type="button"
            onClick={() => {
              const label = prompt('Enter label name for large para question');
              if (label !== null) {
                addQuestion('largepara', label);
              }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add large para Question
          </button>
          <button
            type="button"
            onClick={() => {
              const label = prompt('Enter label name for multiple choice question');
              if (label !== null) {
                addQuestion('multipleChoice', label);
              }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Multiple Choice Question
          </button>
        </div>
      </form>
    </div>
  );
}

