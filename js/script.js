$.Tween.propHooks.number = {
  get: function(tween) {
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
    return parseFloat(num) || 0;
  },

  set: function(tween) {
    var opts = tween.options;
    tween.elem.innerHTML =
      (opts.prefix || "") +
      tween.now.toFixed(opts.fixed || 0) +
      (opts.postfix || "");
  }
};

$("#num-1").animate(
  { number: 50 },
  {
    duration: 5000,
    postfix: "+"
  }
);

$("#num-2")
  .delay(500)
  .animate(
    { number: 1000 },
    {
      duration: 6000,
      postfix: "+"
    }
  );

$("#num-3")
  .delay(2000)
  .animate(
    { number: 300 },
    {
      duration: 7000,
      postfix: "+"
    }
  );

$("#num-4")
  .delay(4000)
  .animate(
    { number: 200 },
    {
      duration: 8000,
      postfix: "+"
    }
  );