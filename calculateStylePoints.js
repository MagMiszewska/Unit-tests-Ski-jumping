const calculateStylePoints = (styleNotes) => {
    const maxNote = Math.max(...styleNotes);
    const minNote = Math.min(...styleNotes);
    return styleNotes.reduce((a, b) => a + b) - (maxNote + minNote);
};

module.exports = calculateStylePoints;

// const calculateStylePoints = (styleNotes) => {
//     const maxNote = Math.max(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
//     const minNote = Math.min(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
//     return styleNotes[0] + styleNotes[1] + styleNotes[2] + styleNotes[3] + styleNotes[4] - maxNote - minNote;
// };

// module.exports = calculateStylePoints;