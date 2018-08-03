// $("#js-rotating").Morphext({
//     animation: "fadeIn", // Overrides default "bounceIn"
//     separator: "|", // Overrides default ","
//     speed: 3000, // Overrides default 2000
//     complete: function () {
//         // Overrides default empty function
//     }
// });

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flash",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

$('.countdown').downCount({
    date: '12/15/2018 12:00:00' // m/d/y
    
});
