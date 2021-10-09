export function getJobList() {
    return fetch('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json')
        .then((response) => response.json())
}