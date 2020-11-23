
const getText = (difficulty) => {

  const easyTexts = "the be and of a in to have to it I that for you he with on do say this they at but we his from that not by she or as what go their can who get if would her all my make about know will as up one time there year so think when which them some me people take out into just see him your come could now than like other how then its our two more these want way look first also new because day more use no man find here thing give many well only those tell one very her even back any good woman through us life child there work".split(" ")

  const mediumTexts = "the be and of a in to have to it I that for you he with on do say this they at but we his from that not by she or as what go their can who get if would her all my make about know will as up one time there year so think when which them some me people take out into just see him your come could now than like other how then its our two more these want way look first also new because day more use no man find here thing give many well only those tell one very her even back any good woman through us life child there work down may after should call world over school still try in as last ask need too feel three when state never become between high really something most another much family own out leave put old while mean on keep student why let great same big group begin seem country help talk where turn problem every start hand might American show part about against place over such again few case most week company where system each right program hear so question during work play government run small number off always move like night live Mr point believe hold today bring happen next without before large all million must home under water room write mother area national money story young fact month different lot right study book eye job word though business issue side kind four head far black long both little house yes after since long provide service around friend important father sit away until power hour game often yet line political end among ever stand bad lose however member pay law meet car city almost include continue set later community much name five once white least president learn real change team minute best several idea kid body information nothing ago right lead social understand whether back watch together follow around parent only stop face anything create public already speak others read level allow add office spend door health person art sure such war history party within grow result open change morning walk reason low win research girl guy early food before moment himself air teacher force offer enough both education across although remember foot second boy maybe toward able age off policy everything love process music including consider appear actually buy probably human wait serve market die send expect home sense build stay fall oh nation plan cut college interest death course someone experience behind reach local kill six remain effect use yeah suggest class control raise care perhaps little late hard field else pass former sell major sometimes require along development themselves report role better economic effort up decide rate strong possible heart drug show leader light voice wife whole police mind finally pull return free military price report less according decision explain son hope even develop view relationship carry town road drive arm true federal break better difference thank receive".split(" ")
  const hardTexts = "the be and of a in to have to it I that for you he with on do say this they at but we his from that not by she or as what go their can who get if would her all my make about know will as up one time there year so think when which them some me people take out into just see him your come could now than like other how then its our two more these want way look first also new because day more use no man find here thing give many well only those tell one very her even back any good woman through us life child there work down may after should call world over school still try in as last ask need too feel three when state never become between high really something most another much family own out leave put old while mean on keep student why let great same big group begin seem country help talk where turn problem every start hand might American show part about against place over such again few case most week company where system each right program hear so question during work play government run small number off always move like night live Mr point believe hold today bring happen next without before large all million must home under water room write mother area national money story young fact month different lot right study book eye job word though business issue side kind four head far black long both little house yes after since long provide service around friend important father sit away until power hour game often yet line political end among ever stand bad lose however member pay law meet car city almost include continue set later community much name five once white least president learn real change team minute best several idea kid body information nothing ago right lead social understand whether back watch together follow around parent only stop face anything create public already speak others read level allow add office spend door health person art sure such war history party within grow result open change morning walk reason low win research girl guy early food before moment himself air teacher force offer enough both education across although remember foot second boy maybe toward able age off policy everything love process music including consider appear actually buy probably human wait serve market die send expect home sense build stay fall oh nation plan cut college interest death course someone experience behind reach local kill six remain effect use yeah suggest class control raise care perhaps little late hard field else pass former sell major sometimes require along development themselves report role better economic effort up decide rate strong possible heart drug show leader light voice wife whole police mind finally pull return free military price report less according decision explain son hope even develop view relationship carry town road drive arm true federal break better difference thank receive value international building action full model join season society because tax director early position player agree especially record pick wear paper special space ground form support event official whose matter everyone center couple site end project hit base activity star table need court produce eat American teach oil half situation easy cost industry figure face street image itself phone either data cover quite picture clear practice piece land recent describe product doctor wall patient worker news test movie certain north love personal open support simply third technology catch step baby computer type attention draw film Republican tree source red nearly organization choose cause hair look point century evidence window difficult listen soon culture billion chance brother energy period course summer less realize hundred available plant likely opportunity term short letter condition choice place single rule daughter administration south husband Congress floor campaign material population well call economy medical hospital church close thousand risk current fire future wrong involve defense anyone increase security bank myself certainly west sport board seek per subject officer private rest behavior deal performance fight throw top quickly past goal second bed order author fill represent focus foreign drop plan blood upon agency push nature color no recently store reduce sound note fine before near movement page enter share than common poor other natural race concern series significant similar hot language each usually response dead rise animal factor decade article shoot east save seven artist away scene stock career despite central eight thus treatment beyond happy exactly protect approach lie size dog fund serious occur media ready sign thought list individual simple quality pressure accept answer hard resource identify left meeting determine prepare disease whatever success argue cup particularly amount ability staff recognize indicate character growth loss degree wonder attack herself region television box TV training pretty trade deal election everybody physical lay general feeling standard bill message fail outside arrive analysis benefit name sex forward lawyer present section environmental glass answer skill sister PM professor operation financial crime stage ok compare authority miss design sort one act ten knowledge gun station blue state strategy little clearly discuss indeed force truth song example democratic check environment leg dark public various rather laugh guess executive set study prove hang entire rock design enough forget since claim note remove manager help close sound enjoy network legal religious cold form final main science green memory card above seat cell establish nice trial expert that spring firm Democrat radio visit management care avoid imagine tonight huge ball no close finish yourself talk theory impact respond statement maintain charge popular traditional onto reveal direction weapon employee cultural contain peace head control base pain apply play measure wide shake fly interview manage chair fish particular camera structure politics perform bit weight suddenly discover candidate top production treat trip evening affect inside conference unit best style adult worry range mention rather far deep past edge individual specific writer trouble necessary throughout challenge fear shoulder institution middle sea dream bar beautiful property instead improve stuff".split(" ")

  // for (i = texts.length -1; i > 0; i--) {
  //   j = Math.floor(Math.random() * i)
  //   k = texts[i]
  //   texts[i] = texts[j]
  //   texts[j] = k
  // }
  if (difficulty === "easy") {
    var result = []
    for (let i = 0; i < 50; i++) 
    { result.push(easyTexts[Math.floor(Math.random() * easyTexts.length)]) }
    return result.join(" ");
  }

  if (difficulty === "medium") {
    var result = []
    for (let i = 0; i < 50; i++) 
    { result.push(mediumTexts[Math.floor(Math.random() * mediumTexts.length)]) }
    return result.join(" ");
  }

  if (difficulty === "hard") {
    var result = []
    for (let i = 0; i < 50; i++) 
    { result.push(hardTexts[Math.floor(Math.random() * hardTexts.length)]) }
    return result.join(" ");
  }








  // texts.sort(function(a, b){return 0.5 - Math.random()})


}








export default getText















// "the of and a to in is you that it he was for on are as with his they I at be this have from or one had by word but not what all were we when your can said there use an each which she how their will up other about out many then them these so some her would make like him into time has look two more write go see number no way could people my than",





    // "Here's to the crazy ones. The misfits. The rebels. The troublemakers."
    // + " The round pegs in the square holes. The ones who see things differently."
    // + " They're not fond of rules. And they have no respect for the status quo."
    // + " You can quote them, disagree with them, glorify or vilify them. About the only thing"
    // + " you can't do is ignore them. Because they change things. They push the human race forward. And"
    // + " while some may see them as the crazy ones, we see genius. Because the people who are crazy"
    // + " enough to think they can change the world, are the ones who do.",

    // "I believe that everything happens for a reason. People change so that you can learn to let go,"
    // + " things go wrong so that you appreciate them when they're right, you believe lies so you eventually"
    // + " learn to trust no one but yourself, and sometimes"
    // + " good things fall apart so better things can fall together.",

    // "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If"
    // + " you want to make sure of keeping it intact you must give it to no one, not even an animal."
    // + " Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe"
    // + " in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless"
    // + " will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable."
    // + " To love is to be vulnerable"