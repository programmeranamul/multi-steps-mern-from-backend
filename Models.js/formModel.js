const mongoose = require("mongoose");

const FromSchema = new mongoose.Schema({
  //frist stape schema
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: String,
  },
  residence: {
    type: String,
    trim: true,
  },
  sex: {
    required: true,
    type: String,
    enum: ["זכר", "נקבה"],
  },
  heightInCm: {
    type: String,
    trim: true,
  },
  weekSports: {
    required: true,
    type: String,
    enum: [
      "בין פעם לפעמיים",
      "לא עושה",
      "בין פעמיים לשלוש",
      "בין שלוש לארבע",
      "בין ארבע לחמש",
      "בין חמש לשש",
      "כול יום",
    ],
  },

  eatHealthy: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },

  meditate: {
    required: true,
    type: String,
    enum: ["כן", "לא"],
  },

  drawerWrite: {
    required: true,
    type: String,
    enum: ["כן", "לא"],
  },
  smoke: {
    required: true,
    type: String,
    enum: ["כן", "לא"],
  },

  likeDoAtWork: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  drink: {
    required: true,
    type: String,
    enum: ["כמעט ולא", "לפעמים", "לעיתים קרובות"],
  },
  listenInSpareTime: [{ type: String }],
  //second step
  complimentSpouse: {
    required: true,
    type: String,
    enum: [
      "קונה לו מתנה",
      "נותן/ת לו חיבוק גדול ונשיקה",
      "עושה משהו כדי לעזור לו/ה",
      "מפנה זמן במיוחד בשבילו/ה",
      "אומר/ת לו/ה כמה הוא/היא מיוחד/ת",
    ],
  },
  iLoveYou: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  expressEmotionsVerbally: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  likeMassage: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  likeKiss: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  expressEmotionsTouch: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  smallRomanticGifts: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  makeRomanticGestures: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  coupleJointActivity: {
    required: true,
    type: String,
    enum: [
      "לא חייבים",
      "פעם בשבוע",
      "פעמיים בשבוע",
      "שלוש ארבע פעמיים בשבוע",
      "ארבע חמש פעמיים בשבוע",
      "כול יום",
    ],
  },
  idealFrequencyForSex: {
    required: true,
    type: String,
    enum: [
      "לא חייבים",
      "פעם בשבוע",
      "פעמיים בשבוע",
      "שלוש ארבע פעמיים בשבוע",
      "ארבע חמש פעמיים בשבוע",
      "כול יום למעט אשפוז כפוי",
    ],
  },

  idealTimeForSex: {
    required: true,
    type: String,
    enum: [
      "עד 10 דק",
      "בין 10 ל 20 דק",
      "בין 20 ל 30 דק",
      "בין חצי שעה לשעה",
      "בין שעה לשעתיים",
      "כול הלילה עד שיוצא עשן לבן",
    ],
  },

  feelLovedInaRelationship: {
    required: true,
    type: String,
    enum: [
      "כשאני מקבל/ת מתנה של תשומת לב",
      "כשאני מקבל/ת חיבוק גדול",
      "כשבן/ת הזוג עושה דברים לעזור לי",
      "כשבן/ת הזוג רוצה לבלות זמן איכות איתי",
      "כשבן/ת הזוג מפרגן/ת לי במילים חמות",
    ],
  },
  //thired step
  choosingImportanGiftForSpouse: {
    required: true,
    type: String,
    enum: ["שתיהיה פרקטית", "שתשמח אותו/ה", "שתראה לו/ה חיבה מהצד שלך"],
  },

  reasonsForTheSuocess: [{ type: String, required: true }],

  mainCauseOfFailure: {
    required: true,
    type: String,
    enum: [
      "גנים טובים",
      "מזל",
      "משפחה קרובה",
      "חברים",
      "עמיתים לעבודה",
      "החוק/המדינה",
      "אני",
      "בן/בת זוג",
      "Other",
    ],
  },

  manageReadWhatExcitesOtherPeople: {
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },

  nextWeekScheduleAdvance: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },

  enterNewField: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  routineYouNeed: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  likeToTryNewThings: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  needChangesInYourLife: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  mindTakingRisks: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  peopleAppreciateYou: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  youToBeManagerOrManager: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  cultivateRelationships: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  closeRelationshipsYouGivingParty: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  easilyIntegrateIntoTeamwork: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  needToGiveToOthers: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  interestedInPersonalDevelopment: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  likeToStudy: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  attendedAnyCourse: {
    required: true,
    type: String,
    enum: ["כן", "לא"],
  },
  donateMoneyToCharity: {
    required: true,
    type: String,
    enum: ["כן", "לא"],
  },

  volunteerInTheCommunity: {
    required: true,
    type: String,
    enum: ["כן", "לא"],
  },

  contributingToOthersEssential: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },

  moreYouGive: {
    required: true,
    type: String,
    enum: ["1", "2", "3", "4", "5"],
  },
  whatWouldYouLikeToSeeHappen: {
    required: true,
    type: String,
    enum: [
      "שייבאו הרבה אנשים ולהרוויח הרבה כסף",
      "לנסות דברים חדשים שעוד לא עשיתי",
      "שרוב האנשים יעריכו אותי",
      "הזדמנות להכיר הרבה אנשים חדשים",
      "ללמוד דברים חדשים תוך כדי עשייה",
      "לגרום הנאה לאנשים",
    ],
  },
});

const FormData = mongoose.model("FormData", FromSchema);

module.exports = FormData;
