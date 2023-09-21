$(".menuContainer").hover((event) => {
    $(event.currentTarget).children("img").toggleClass("torchRotation");
    $(event.currentTarget).children(".gapingElement").toggleClass("gapingElementWithoutBackground");
})