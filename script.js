async function answer_questions() {
    let model = await qna.load();
    // or you can specify the model url.
    //config = {modelUrl: 'https://yourown-server/qna/model.json'};
    //customModel = await qna.load(config);
    const passage=document.getElementById('passage').value
    const question =document.getElementById('question').value
    const answers = await model.findAnswers(question, passage);
    document.getElementById('answers').textContent=answers[0].text;
}

document.getElementById('answer-btn').addEventListener('click', answer_questions);