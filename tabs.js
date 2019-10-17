let front = {
  openTab: function(e, t, o) {
    let n, a, l;
    for (a = $(e).closest(o).find(".tab-content"),
    n = 0; n < a.length; n++)
        a[n].style.display = "none";
    for (l = $(e).closest(".tabs-ul").find(".tab-links"),
    n = 0; n < l.length; n++)
        l[n].className = l[n].className.replace(" active", "");
    document.getElementById(t).style.display = "block",
    $(e).addClass("active")
  },
}

