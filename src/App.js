/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import "@tailwindcss/forms";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [candidatePopup, setCandidatePopup] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Check if there are any candidates stored in cookies
    const storedCandidates = Cookies.get("candidates");
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  useEffect(() => {
    // Store the candidates in cookies whenever the candidates state changes
    Cookies.set("candidates", JSON.stringify(candidates), { expires: 9999 });
    return () => {
      // Clean up the effect by removing the stored cookies when the component unmounts
      Cookies.remove("candidates");
    };
  }, [candidates]);

  // Technical Aspect
  const topics = [
    { id: 1, name: "Javascript", status: "Pending" },
    { id: 2, name: "React", status: "Pending" },
    { id: 3, name: "ES6 Syntax", status: "Pending" },
    { id: 4, name: "SCSS", status: "Pending" },
    { id: 5, name: "CSS", status: "Pending" },
    { id: 6, name: "PHP", status: "Pending" },
    { id: 7, name: "PHPCS", status: "Pending" },
    { id: 8, name: "PHPStan", status: "Pending" },
    { id: 9, name: "Github", status: "Pending" },
    { id: 10, name: "VSCode", status: "Pending" },
    { id: 11, name: "Prettier", status: "Pending" },
    { id: 12, name: "ESLint", status: "Pending" },
    { id: 13, name: "NPM", status: "Pending" },
    { id: 14, name: "Grunt", status: "Pending" },
    { id: 15, name: "Webpack", status: "Pending" },
    { id: 16, name: "Composer", status: "Pending" },
    { id: 17, name: "Tailwind", status: "Pending" },
    { id: 18, name: "WordPress 101", status: "Pending" },
    { id: 19, name: "WordPress Hooks & Filters", status: "Pending" },
    { id: 20, name: "WordPress Plugin Development", status: "Pending" },
    { id: 21, name: "OOP", status: "Pending" },
    { id: 22, name: "WordPress Block Editor", status: "Pending" },
    { id: 23, name: "Jira", status: "Pending" },
    { id: 24, name: "Debugging", status: "Pending" },
  ];

  // Handles form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Remarks
    const remark = event.target.remarks.value;

    let formData = {};
    if (event.target.topic1 !== undefined) {
      const javascript = event.target.topic1.checked ? "Done" : "Pending";
      const react = event.target.topic2.checked ? "Done" : "Pending";
      const ES6Syntax = event.target.topic3.checked ? "Done" : "Pending";
      const SCSS = event.target.topic4.checked ? "Done" : "Pending";
      const CSS = event.target.topic5.checked ? "Done" : "Pending";
      const PHP = event.target.topic6.checked ? "Done" : "Pending";
      const PHPCS = event.target.topic7.checked ? "Done" : "Pending";
      const PHPStan = event.target.topic8.checked ? "Done" : "Pending";
      const github = event.target.topic9.checked ? "Done" : "Pending";
      const VSCode = event.target.topic10.checked ? "Done" : "Pending";
      const prettier = event.target.topic11.checked ? "Done" : "Pending";
      const ESLint = event.target.topic12.checked ? "Done" : "Pending";
      const NPM = event.target.topic13.checked ? "Done" : "Pending";
      const grunt = event.target.topic14.checked ? "Done" : "Pending";
      const webpack = event.target.topic15.checked ? "Done" : "Pending";
      const composer = event.target.topic16.checked ? "Done" : "Pending";
      const tailwind = event.target.topic17.checked ? "Done" : "Pending";
      const wordpress101 = event.target.topic18.checked ? "Done" : "Pending";
      const wordpressHooksFilters = event.target.topic19.checked
        ? "Done"
        : "Pending";
      const wordpressPluginDevelopment = event.target.topic20.checked
        ? "Done"
        : "Pending";
      const OOP = event.target.topic21.checked ? "Done" : "Pending";
      const wordpressBlockEditor = event.target.topic22.checked
        ? "Done"
        : "Pending";
      const jira = event.target.topic23.checked ? "Done" : "Pending";
      const debugging = event.target.topic24.checked ? "Done" : "Pending";

      formData = {
        id: Date.now(),
        name: event.target.name.value,
        dateOfTraining: event.target.dateOfTraining.value,
        javascript,
        react,
        ES6Syntax,
        SCSS,
        CSS,
        PHP,
        PHPCS,
        PHPStan,
        github,
        VSCode,
        prettier,
        ESLint,
        NPM,
        grunt,
        webpack,
        composer,
        tailwind,
        wordpress101,
        wordpressHooksFilters,
        wordpressPluginDevelopment,
        OOP,
        wordpressBlockEditor,
        jira,
        debugging,
        remark,
      };
    } else {
      formData = {
        id: Date.now(),
        name: event.target.name.value,
        dateOfTraining: event.target.dateOfTraining.value,
        javascript: "Pending",
        react: "Pending",
        ES6Syntax: "Pending",
        SCSS: "Pending",
        CSS: "Pending",
        PHP: "Pending",
        PHPCS: "Pending",
        PHPStan: "Pending",
        github: "Pending",
        VSCode: "Pending",
        prettier: "Pending",
        ESLint: "Pending",
        NPM: "Pending",
        grunt: "Pending",
        webpack: "Pending",
        composer: "Pending",
        tailwind: "Pending",
        wordpress101: "Pending",
        wordpressHooksFilters: "Pending",
        wordpressPluginDevelopment: "Pending",
        OOP: "Pending",
        wordpressBlockEditor: "Pending",
        jira: "Pending",
        debugging: "Pending",
        alwaysUpToDateValue,
        attentionToDetailValue,
        punctualValue,
        responsibleValue,
        communicationValue,
        remark,
      };
    }

    if (event.target.alwaysUpToDate !== undefined) {
      // Core Values
      var alwaysUpToDate = document.getElementById("alwaysUpToDate");
      var alwaysUpToDateValue =
        alwaysUpToDate.options[alwaysUpToDate.selectedIndex].value;

      var attentionToDetail = document.getElementById("attentionToDetail");
      var attentionToDetailValue =
        attentionToDetail.options[attentionToDetail.selectedIndex].value;

      var punctual = document.getElementById("punctual");
      var punctualValue = punctual.options[punctual.selectedIndex].value;

      var responsible = document.getElementById("responsible");
      var responsibleValue =
        responsible.options[responsible.selectedIndex].value;

      var communication = document.getElementById("communication");
      var communicationValue =
        communication.options[communication.selectedIndex].value;

      formData = {
        ...formData,
        alwaysUpToDateValue,
        attentionToDetailValue,
        punctualValue,
        responsibleValue,
        communicationValue,
      };
    } else {
      formData = { ...formData };
    }

    // Add the new candidate report to the candidates state
    setCandidates([...candidates, formData]);
    toast("Report added successfuly");
  };

  // Used for Search by name and date
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.dateOfTraining.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Deletes the report
  const handleDelete = (id) => {
    // Filter out the candidate with the given id from the candidates state
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Are you sure you want to delete this report?")) {
      return;
    }
    const newCandidates = candidates.filter((candidate) => candidate.id !== id);
    setCandidates(newCandidates);
    toast("report deleted successfuly!");
  };

  // Handle Popup
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      fontSize: "11px",
      width: "40%",
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (candidate) => {
    setIsOpen(true);
    setCandidatePopup(candidate);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCandidates(candidates);
  };
  function copyText() {
    const myDiv = document.getElementById("popupContent");
    const range = document.createRange();
    range.selectNode(myDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    console.log("Copied to clipboard: " + myDiv.innerText);
    toast("Message copied to clipboard");
  }

  return (
    <>
      <ToastContainer />
      <h1 className="text-4xl text-center my-6 text-white uppercase">
        Slack Training Program Report Generator
      </h1>
      <div className="wrapper flex flex-col px-[10rem] bg-white">
        <form
          className="flex flex-col gap-8"
          onSubmit={(event) => handleFormSubmit(event)}
        >
          {/* NAME & DATE */}
          <div className="flex flex-row list-none gap-6 items-center">
            <div>
              <label className="text-base font-semibold leading-7">
                Candidate Name{" "}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="focus:border-gray-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-base font-semibold leading-7">
                Date of Report{" "}
              </label>
              <input
                id="dateOfTraining"
                type="date"
                name="dateOfTraining"
                required
              />
            </div>
          </div>

          {/* TOPICS - Technical Aspects */}
          <Disclosure as="div">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <label className="text-base font-semibold leading-7">
                      Modules
                    </label>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <div className="text-base leading-7 text-gray-600">
                    <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                      {topics.map((topic) => (
                        <div
                          key={topic.id}
                          className="relative flex items-start py-4"
                        >
                          <div className="min-w-0 flex-1 text-sm">
                            <label className="select-none font-medium text-gray-700">
                              {topic.name}
                            </label>
                          </div>
                          <div className="ml-3 flex h-5 items-center">
                            <input
                              name={`topic${topic.id}`}
                              id={`topic${topic.id}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-[#4999f8] focus:ring-[#4999f8]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* CORE VALUES */}
          <Disclosure as="div">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <label className="text-base font-semibold leading-7">
                      Core Values
                    </label>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <div className="text-base leading-7 text-gray-600">
                    <div className="grid grid-flow-row list-none gap-2 grid-cols-2 border-t border-gray-200 p-4">
                      <div>
                        <li className="select-none font-medium text-gray-700">
                          Attention to detail
                        </li>
                        <select id="attentionToDetail">
                          <option value="0 = Below Average">
                            0 = Below Average
                          </option>
                          <option value="1 = Average">1 = Average</option>
                          <option value="2 = Good">2 = Good</option>
                          <option value="3 = Expert">3 = Expert</option>
                        </select>
                      </div>
                      <div>
                        <li className="select-none font-medium text-gray-700">
                          Always up-to-date
                        </li>
                        <select id="alwaysUpToDate">
                          <option value="0 = Below Average">
                            0 = Below Average
                          </option>
                          <option value="1 = Average">1 = Average</option>
                          <option value="2 = Good">2 = Good</option>
                          <option value="3 = Expert">3 = Expert</option>
                        </select>
                      </div>
                      <div>
                        <li className="select-none font-medium text-gray-700">
                          Punctual, disciplined and organised
                        </li>
                        <select id="punctual">
                          <option value="0 = Below Average">
                            0 = Below Average
                          </option>
                          <option value="1 = Average">1 = Average</option>
                          <option value="2 = Good">2 = Good</option>
                          <option value="3 = Expert">3 = Expert</option>
                        </select>
                      </div>
                      <div>
                        <li className="select-none font-medium text-gray-700">
                          Responsible, action taker and results oriented
                        </li>
                        <select id="responsible">
                          <option value="0 = Below Average">
                            0 = Below Average
                          </option>
                          <option value="1 = Average">1 = Average</option>
                          <option value="2 = Good">2 = Good</option>
                          <option value="3 = Expert">3 = Expert</option>
                        </select>
                      </div>
                      <div>
                        <li className="select-none font-medium text-gray-700">
                          Communication
                        </li>
                        <select id="communication">
                          <option>0 = Below Average</option>
                          <option>1 = Average</option>
                          <option>2 = Good</option>
                          <option>3 = Expert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* REMARKS */}
          <label className="text-base font-semibold leading-7">Remarks</label>
          <textarea id="remarks" name="remarks"></textarea>

          <button
            className="bg-[#4999f8] text-white w-[25%] m-auto p-2 rounded-sm"
            type="submit"
          >
            + Add Candidate Report
          </button>
        </form>

        {/* REPORT SECTION */}
      </div>
      <div className="wrapper flex flex-col px-[10rem] bg-white">
        <div className="flex justify-between">
          <div>
            <label className="text-base font-semibold leading-7">
              Search by candidate name{" "}
            </label>
            <input id="search" type="text" onChange={handleSearch} />
          </div>
          <div>
            <label className="text-base font-semibold leading-7">
              Search by Date of Training{" "}
            </label>
            <input
              id="dateOfTraining"
              type="date"
              name="dateOfTraining"
              onChange={handleSearch}
            />
          </div>
        </div>
        <table className="text-left mt-10">
          <thead>
            <tr className="uppercase text-center">
              <th>Name</th>
              <th>Date of Training</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.dateOfTraining}</td>
                <td>
                  <button onClick={() => openModal(candidate)}>
                    <AiOutlineEye className="fill-[#4999f8]" />
                  </button>
                </td>
                <Modal
                  id={candidate.name}
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Popup"
                  ariaHideApp={false}
                >
                  <div
                    id="popupContent"
                    onClick={copyText}
                    className="overflow-y-scroll max-h-[700px]"
                  >
                    <h2>Weekly Report for {candidatePopup.name}</h2>
                    <br />
                    <h1>Technical Aspect</h1>
                    <p> ----------------</p>
                    <ol>
                      <li>Javascript -&gt; {candidatePopup.javascript}</li>
                      <li>React -&gt; {candidatePopup.react}</li>
                      <li>ES6 Syntax -&gt; {candidatePopup.ES6Syntax}</li>
                      <li>SCSS -&gt; {candidatePopup.SCSS}</li>
                      <li>CSS -&gt; {candidatePopup.CSS}</li>
                      <li>PHP -&gt; {candidatePopup.PHP}</li>
                      <li>PHPCS -&gt; {candidatePopup.PHPCS}</li>
                      <li>PHPStan -&gt; {candidatePopup.PHPStan}</li>
                      <li>Github -&gt; {candidatePopup.github}</li>
                      <li>VSCode -&gt; {candidatePopup.VSCode}</li>
                      <li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Prettier -&gt;{" "}
                        {candidatePopup.prettier}
                      </li>

                      <li>
                        &nbsp;&nbsp;&nbsp;&nbsp;ESLint -&gt;{" "}
                        {candidatePopup.ESLint}
                      </li>
                      <li>NPM -&gt; {candidatePopup.javascript}</li>
                      <li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Grunt -&gt;{" "}
                        {candidatePopup.grunt}
                      </li>
                      <li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Webpack -&gt;{" "}
                        {candidatePopup.webpack}
                      </li>
                      <li>Composer -&gt; {candidatePopup.composer}</li>
                      <li>Tailwind -&gt; {candidatePopup.tailwind}</li>
                      <li>WordPress 101 -&gt; {candidatePopup.wordpress101}</li>
                      <li>
                        WordPress Hooks & Filters -&gt;{" "}
                        {candidatePopup.wordpressHooksFilters}
                      </li>
                      <li>
                        WordPress Plugin Development -&gt;{" "}
                        {candidatePopup.wordpressPluginDevelopment}
                      </li>
                      <li>OOP -&gt; {candidatePopup.OOP}</li>
                      <li>
                        WordPress Block Editor -&gt;{" "}
                        {candidatePopup.wordpressBlockEditor}
                      </li>
                      <li>Jira -&gt; {candidatePopup.jira}</li>
                      <li>Debugging -&gt; {candidatePopup.debugging}</li>
                    </ol>
                    <br />
                    <h1>Core Values</h1>
                    <p> -----------</p>
                    <ol>
                      <li>
                        - Attention to detail :{" "}
                        {candidatePopup.alwaysUpToDateValue}
                      </li>
                      <li>
                        - Always up-to-date :{" "}
                        {candidatePopup.attentionToDetailValue}
                      </li>
                      <li>
                        - Punctual, disciplined and organised :{" "}
                        {candidatePopup.punctualValue}
                      </li>
                      <li>
                        - Responsible, action taker and results oriented :{" "}
                        {candidatePopup.responsibleValue}
                      </li>
                      <li>
                        - Communication : {candidatePopup.communicationValue}
                      </li>
                    </ol>
                    <br />
                    <h1>Remarks</h1>
                    <p> --------</p>
                    <div className="whitespace-pre-wrap">
                      {candidatePopup.remark}
                    </div>
                  </div>
                  <button onClick={closeModal} className="text-red-500 mt-4">
                    Close Popup
                  </button>
                </Modal>
                <td>
                  <button onClick={() => handleDelete(candidate.id)}>
                    <AiFillDelete className="fill-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
