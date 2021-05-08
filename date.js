//jshint esvresion:6

exports.getDate = function getdate() {
const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString("en-US", options);

}

exports.getDay = function getdate() {
const today = new Date();

const options = {
    weekday: "long"
};

return today.toLocaleDateString("en-US", options);

}

