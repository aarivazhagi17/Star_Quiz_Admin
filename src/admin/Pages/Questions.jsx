import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Questions.css";

export default function Questions() {

    const [question, setQuestion] =
        useState("");

    const [option1, setOption1] =
        useState("");

    const [option2, setOption2] =
        useState("");

    const [option3, setOption3] =
        useState("");

    const [option4, setOption4] =
        useState("");

    const [answer, setAnswer] =
        useState("");

    const [questions, setQuestions] =
        useState([]);

    useEffect(() => {

        fetchQuestions();

    }, []);

    const fetchQuestions = async () => {

        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/questions`
        );

        setQuestions(res.data);

    };

    const handleSubmit = async () => {

        const data = {

            question,

            options: [
                option1,
                option2,
                option3,
                option4,
            ],

            answer,

        };

        await axios.post(
            `${import.meta.env.VITE_API_URL}/add-question`,
            data
        );

        alert("Question Added");

        fetchQuestions();

        setQuestion("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        setAnswer("");

    };

    const handleDelete = async (id) => {

        await axios.delete(
            `${import.meta.env.VITE_API_URL}/delete-question/${id}`
        );

        alert("Question Deleted");

        fetchQuestions();

    };


    return (

        <div className="question-container">

            <div className="question-card">

                <h1 className="question-title">

                    Add Question

                </h1>

                <input
                    className="question-input"
                    placeholder="Enter Question"
                    value={question}
                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }
                />

                <input
                    className="question-input"
                    placeholder="Option 1"
                    value={option1}
                    onChange={(e) =>
                        setOption1(e.target.value)
                    }
                />

                <input
                    className="question-input"
                    placeholder="Option 2"
                    value={option2}
                    onChange={(e) =>
                        setOption2(e.target.value)
                    }
                />

                <input
                    className="question-input"
                    placeholder="Option 3"
                    value={option3}
                    onChange={(e) =>
                        setOption3(e.target.value)
                    }
                />

                <input
                    className="question-input"
                    placeholder="Option 4"
                    value={option4}
                    onChange={(e) =>
                        setOption4(e.target.value)
                    }
                />

                <input
                    className="question-input"
                    placeholder="Correct Answer"
                    value={answer}
                    onChange={(e) =>
                        setAnswer(e.target.value)
                    }
                />

                <button
                    className="add-btn"
                    onClick={handleSubmit}
                >

                    Add Question

                </button>

            </div>

            <div className="questions-list">


                <h1 className="list-title">
                    Added Questions
                </h1>

                {questions.map((item, index) => (

                    <div
                        key={index}
                        className="question-item"
                    >

                        <h3>

                            {index + 1}.
                            {item.question}

                        </h3>

                        {item.options.map((opt, i) => (

                            <p
                                key={i}
                                className="option-text"
                            >
                                {opt}
                            </p>

                        ))}

                        <p className="answer-text">

                            <strong>
                                Answer:
                            </strong>

                            {item.answer}

                        </p>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                handleDelete(item._id)
                            }
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );
}