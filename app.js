// ===== PPL WORKOUT PRO - Main Application =====

// ===== EXERCISE VIDEO DATABASE =====
// YouTube video IDs for exercise demonstrations
const EXERCISE_VIDEOS = {
  'Barbell Bench Press': { videoId: 'rT7DgCr-3pg', tips: 'Keep feet flat, arch upper back slightly, lower bar to mid-chest. Drive through feet on the press.' },
  'Incline Dumbbell Press': { videoId: 'SLOFBnMFWJQ', tips: 'Set bench to 30-45°. Lower dumbbells to chest level with elbows at 45°. Squeeze at the top.' },
  'Overhead Press (Barbell)': { videoId: 'QAQ64hK4Xxs', tips: 'Brace core, press straight up. Move head through once bar passes forehead. Lock out at top.' },
  'Dumbbell Lateral Raises': { videoId: '3VcKaXpzqRo', tips: 'Slight bend in elbows, raise to shoulder height. Control the negative. Lead with elbows, not hands.' },
  'Cable Chest Flyes': { videoId: 'Iwe6AmxVf7o', tips: 'Set pulleys at chest height. Slight elbow bend, squeeze chest at center. Control the stretch.' },
  'Tricep Rope Pushdowns': { videoId: '2-LAMcpzODU', tips: 'Keep elbows pinned to sides. Split rope at bottom for full contraction. Control the return.' },
  'Overhead Tricep Extension': { videoId: '_gsUck-7M74', tips: 'Keep elbows close to head. Lower weight behind head, extend fully. Feel the stretch at bottom.' },
  'Push-Ups (Burnout)': { videoId: 'IODxDxX7oi4', tips: 'Hands shoulder-width, core tight. Full range of motion. Go to failure with good form.' },
  'Dumbbell Bench Press': { videoId: 'VmB1G1K7v94', tips: 'Full ROM advantage over barbell. Lower until stretch in chest, press up and slightly inward.' },
  'Decline Barbell Press': { videoId: 'LfyQBUKR8SE', tips: 'Lower bar to lower chest. Keep wrists over elbows. Great for lower chest emphasis.' },
  'Seated Dumbbell Shoulder Press': { videoId: 'qEwKCR5JCog', tips: 'Back supported, press up in slight arc. Dont lock elbows fully. Control the descent.' },
  'Arnold Press': { videoId: '6Z15_WdXmVw', tips: 'Start with palms facing you, rotate as you press up. Full rotation at the top.' },
  'Front Raises (Dumbbell)': { videoId: '-t7fuZ0KhDA', tips: 'Raise to eye level, dont swing. Alternate arms or both together. Control the negative.' },
  'Pec Deck Machine': { videoId: 'Z57CtFmRMxA', tips: 'Align elbows with pads at chest height. Squeeze hard at center, stretch on return.' },
  'Close-Grip Bench Press': { videoId: 'nEF0bv2FW94', tips: 'Hands shoulder-width apart. Tuck elbows close to body. Focus on tricep contraction.' },
  'Diamond Push-Ups': { videoId: 'J0DnG1_S92I', tips: 'Hands together forming diamond shape. Keep elbows close. Great tricep finisher.' },
  'Deadlift (Conventional)': { videoId: 'op9kVnSso6Q', tips: 'Hip-width stance, grip outside knees. Push floor away, keep bar close. Lockout with glutes.' },
  'Pull-Ups / Lat Pulldown': { videoId: 'eGo4IYlbE5g', tips: 'Full dead hang to chin over bar. Initiate by pulling elbows down. Control the descent.' },
  'Barbell Bent-Over Row': { videoId: 'FWJR5Ve8bnQ', tips: 'Hinge at hips 45°, pull bar to lower chest. Squeeze shoulder blades at top.' },
  'Seated Cable Row': { videoId: 'GZbfZ033f74', tips: 'Sit tall, pull handle to lower chest. Squeeze back, control return. Dont lean too far.' },
  'Face Pulls': { videoId: 'rep-qVOkqgk', tips: 'Set cable at face height. Pull to face, externally rotate at end. Great for rear delts and posture.' },
  'Barbell Bicep Curls': { videoId: 'kwG2ipFRgFo', tips: 'Elbows at sides, full range. Squeeze at top, lower slowly. Dont swing the weight.' },
  'Hammer Curls': { videoId: 'zC3nLlEvin4', tips: 'Neutral grip (palms facing each other). Targets brachialis and forearms. Keep elbows pinned.' },
  'Reverse Flyes (Machine)': { videoId: 'IuzVpzmkwCs', tips: 'Chest on pad, arms extended. Squeeze rear delts at full extension. Control the weight.' },
  'Rack Pulls': { videoId: 'V2lAm_QLRWU', tips: 'Set pins at knee height. Pull with back and traps. Great for upper back thickness.' },
  'Chin-Ups (Weighted)': { videoId: 'brhRXlOhGQY', tips: 'Supinated grip (palms toward you). Pull chin over bar. Add weight when bodyweight is easy.' },
  'Single-Arm Dumbbell Row': { videoId: 'pYcpY20QaE8', tips: 'Support with opposite hand. Pull elbow past torso. Squeeze lat at top. Full stretch at bottom.' },
  'T-Bar Row': { videoId: 'j3Igk5nyZE4', tips: 'Straddle bar, chest up. Pull to chest, squeeze upper back. Keep lower back neutral.' },
  'Straight-Arm Pulldown': { videoId: 'AjZpGJEgJzs', tips: 'Arms straight, slight elbow bend. Push bar down in arc. Feel lats stretch and contract.' },
  'Face Pulls (Rope)': { videoId: 'rep-qVOkqgk', tips: 'High pull with external rotation at end. Great for rear delts and rotator cuff health.' },
  'Incline Dumbbell Curls': { videoId: 'soxrZlIl35U', tips: 'Set bench at 45°. Let arms hang fully extended. Curl up, maximizes bicep stretch.' },
  'Concentration Curls': { videoId: '0AUGkch3tzc', tips: 'Elbow braced against inner thigh. Full ROM, squeeze at top. Isolates bicep peak.' },
  'Barbell Back Squat': { videoId: 'ultWZbUMPL8', tips: 'Bar on upper traps, feet shoulder-width. Break at hips first, depth to parallel or below.' },
  'Romanian Deadlift': { videoId: '7j-2w4-P14I', tips: 'Slight knee bend, hinge at hips. Feel hamstring stretch. Bar stays close to legs.' },
  'Leg Press': { videoId: 'IZxyjW7MPJQ', tips: 'Feet shoulder-width on platform. Lower until 90° at knees. Push through heels. Dont lock out.' },
  'Walking Lunges': { videoId: 'L8fvypPH3Lc', tips: 'Long stride, front knee tracks over toes. Drive up through front heel. Keep torso upright.' },
  'Leg Curls (Machine)': { videoId: '1Tq3QdYUuHs', tips: 'Pad above ankles, squeeze hamstrings at top. Control the negative. Full range of motion.' },
  'Leg Extensions': { videoId: 'YyvSfVjQeL0', tips: 'Pad on lower shins, extend fully. Squeeze quads at top. Control descent. Dont go too heavy.' },
  'Standing Calf Raises': { videoId: 'gwLzBJYoWlI', tips: 'Full stretch at bottom, squeeze at top. Pause at peak contraction. Control the negative.' },
  'Hip Thrusts (Barbell)': { videoId: 'xDmFkJxPzeM', tips: 'Upper back on bench, bar on hips. Drive hips up, squeeze glutes at top. Chin tucked.' },
  'Front Squat': { videoId: 'v-mQm_pH1Xo', tips: 'Clean grip or cross-arm. Elbows high, torso upright. More quad-dominant than back squat.' },
  'Bulgarian Split Squats': { videoId: 'Foc_BBIeMk0', tips: 'Rear foot on bench. Lower until front thigh is parallel. Drive through front heel.' },
  'Sumo Deadlift': { videoId: 'LGIS92h4FI0', tips: 'Wide stance, toes out. Grip inside knees. Push floor apart with feet. Keep chest up.' },
  'Hack Squat Machine': { videoId: 'EdtaJRBqwes', tips: 'Feet shoulder-width, lower portion of platform. Deep ROM, push through heels.' },
  'Glute-Ham Raise': { videoId: 'lT4YBLk0T2M', tips: 'Control the descent using hamstrings. Push against pad to return up. Advanced movement.' },
  'Single-Leg Press': { videoId: 'c2GMvg67gbY', tips: 'One leg at a time for imbalance correction. Same form as regular leg press. Full ROM.' },
  'Seated Calf Raises': { videoId: 'JbyjNymZOt0', tips: 'Targets the soleus. Full stretch at bottom, hold squeeze at top for 1-2 seconds.' },
  'Cable Pull-Through': { videoId: 'MBcMeHApFkg', tips: 'Cable between legs, hinge at hips. Squeeze glutes to stand tall. Keep arms straight.' },
  'Brisk Walking (Incline)': { videoId: 'nN4gEzfPa6s', tips: 'Set treadmill to 10-15% incline. Walk at brisk pace. Great low-impact cardio for recovery.' },
  'Foam Rolling (Full Body)': { videoId: 'MfWubSAMv4c', tips: 'Roll each muscle group 30-60s. Pause on tight spots. Breathe deeply and relax into it.' },
  'Dynamic Stretching': { videoId: 'nPHfEnZD1Wk', tips: 'Leg swings, arm circles, hip circles. Move through full range. Great for warming up.' },
  'Light Cycling': { videoId: 'NH2bGBKHL4A', tips: 'Low resistance, moderate cadence (70-80 RPM). Keep heart rate in zone 1-2. Focus on recovery.' }
};

// ===== WORKOUT DATA =====
const WORKOUTS = {
  push: {
    id: 'push',
    name: 'Push Day',
    type: 'push',
    muscles: 'Chest, Shoulders, Triceps',
    icon: 'fa-hand-fist',
    duration: '50-60 min',
    exercises: [
      { name: 'Barbell Bench Press', sets: 4, reps: '8-10', muscle: 'Chest', rest: 90 },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', muscle: 'Upper Chest', rest: 75 },
      { name: 'Overhead Press (Barbell)', sets: 4, reps: '8-10', muscle: 'Shoulders', rest: 90 },
      { name: 'Dumbbell Lateral Raises', sets: 3, reps: '12-15', muscle: 'Side Delts', rest: 60 },
      { name: 'Cable Chest Flyes', sets: 3, reps: '12-15', muscle: 'Chest', rest: 60 },
      { name: 'Tricep Rope Pushdowns', sets: 3, reps: '12-15', muscle: 'Triceps', rest: 60 },
      { name: 'Overhead Tricep Extension', sets: 3, reps: '10-12', muscle: 'Triceps', rest: 60 },
      { name: 'Push-Ups (Burnout)', sets: 2, reps: 'To Failure', muscle: 'Chest', rest: 45 }
    ]
  },
  push2: {
    id: 'push2',
    name: 'Push Day (Variation B)',
    type: 'push',
    muscles: 'Chest, Shoulders, Triceps',
    icon: 'fa-hand-fist',
    duration: '50-60 min',
    exercises: [
      { name: 'Dumbbell Bench Press', sets: 4, reps: '8-12', muscle: 'Chest', rest: 90 },
      { name: 'Decline Barbell Press', sets: 3, reps: '8-10', muscle: 'Lower Chest', rest: 75 },
      { name: 'Seated Dumbbell Shoulder Press', sets: 4, reps: '8-10', muscle: 'Shoulders', rest: 90 },
      { name: 'Arnold Press', sets: 3, reps: '10-12', muscle: 'Shoulders', rest: 75 },
      { name: 'Front Raises (Dumbbell)', sets: 3, reps: '12-15', muscle: 'Front Delts', rest: 60 },
      { name: 'Pec Deck Machine', sets: 3, reps: '12-15', muscle: 'Chest', rest: 60 },
      { name: 'Close-Grip Bench Press', sets: 3, reps: '8-10', muscle: 'Triceps', rest: 75 },
      { name: 'Diamond Push-Ups', sets: 2, reps: 'To Failure', muscle: 'Triceps', rest: 45 }
    ]
  },
  pull: {
    id: 'pull',
    name: 'Pull Day',
    type: 'pull',
    muscles: 'Back, Biceps, Rear Delts',
    icon: 'fa-arrow-up',
    duration: '50-60 min',
    exercises: [
      { name: 'Deadlift (Conventional)', sets: 4, reps: '5-6', muscle: 'Back', rest: 120 },
      { name: 'Pull-Ups / Lat Pulldown', sets: 4, reps: '8-10', muscle: 'Lats', rest: 90 },
      { name: 'Barbell Bent-Over Row', sets: 4, reps: '8-10', muscle: 'Upper Back', rest: 90 },
      { name: 'Seated Cable Row', sets: 3, reps: '10-12', muscle: 'Mid Back', rest: 75 },
      { name: 'Face Pulls', sets: 3, reps: '15-20', muscle: 'Rear Delts', rest: 60 },
      { name: 'Barbell Bicep Curls', sets: 3, reps: '10-12', muscle: 'Biceps', rest: 60 },
      { name: 'Hammer Curls', sets: 3, reps: '10-12', muscle: 'Biceps', rest: 60 },
      { name: 'Reverse Flyes (Machine)', sets: 3, reps: '12-15', muscle: 'Rear Delts', rest: 60 }
    ]
  },
  pull2: {
    id: 'pull2',
    name: 'Pull Day (Variation B)',
    type: 'pull',
    muscles: 'Back, Biceps, Rear Delts',
    icon: 'fa-arrow-up',
    duration: '50-60 min',
    exercises: [
      { name: 'Rack Pulls', sets: 4, reps: '6-8', muscle: 'Back', rest: 120 },
      { name: 'Chin-Ups (Weighted)', sets: 4, reps: '6-8', muscle: 'Lats/Biceps', rest: 90 },
      { name: 'Single-Arm Dumbbell Row', sets: 3, reps: '10-12', muscle: 'Lats', rest: 75 },
      { name: 'T-Bar Row', sets: 3, reps: '8-10', muscle: 'Upper Back', rest: 90 },
      { name: 'Straight-Arm Pulldown', sets: 3, reps: '12-15', muscle: 'Lats', rest: 60 },
      { name: 'Face Pulls (Rope)', sets: 3, reps: '15-20', muscle: 'Rear Delts', rest: 60 },
      { name: 'Incline Dumbbell Curls', sets: 3, reps: '10-12', muscle: 'Biceps', rest: 60 },
      { name: 'Concentration Curls', sets: 2, reps: '12-15', muscle: 'Biceps', rest: 45 }
    ]
  },
  legs: {
    id: 'legs',
    name: 'Leg Day',
    type: 'legs',
    muscles: 'Quads, Hamstrings, Glutes, Calves',
    icon: 'fa-person-walking',
    duration: '55-65 min',
    exercises: [
      { name: 'Barbell Back Squat', sets: 4, reps: '6-8', muscle: 'Quads/Glutes', rest: 120 },
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', muscle: 'Hamstrings', rest: 90 },
      { name: 'Leg Press', sets: 3, reps: '10-12', muscle: 'Quads', rest: 90 },
      { name: 'Walking Lunges', sets: 3, reps: '12 each', muscle: 'Glutes/Quads', rest: 75 },
      { name: 'Leg Curls (Machine)', sets: 3, reps: '10-12', muscle: 'Hamstrings', rest: 60 },
      { name: 'Leg Extensions', sets: 3, reps: '12-15', muscle: 'Quads', rest: 60 },
      { name: 'Standing Calf Raises', sets: 4, reps: '12-15', muscle: 'Calves', rest: 60 },
      { name: 'Hip Thrusts (Barbell)', sets: 3, reps: '10-12', muscle: 'Glutes', rest: 75 }
    ]
  },
  legs2: {
    id: 'legs2',
    name: 'Leg Day (Variation B)',
    type: 'legs',
    muscles: 'Quads, Hamstrings, Glutes, Calves',
    icon: 'fa-person-walking',
    duration: '55-65 min',
    exercises: [
      { name: 'Front Squat', sets: 4, reps: '6-8', muscle: 'Quads', rest: 120 },
      { name: 'Bulgarian Split Squats', sets: 3, reps: '10 each', muscle: 'Quads/Glutes', rest: 90 },
      { name: 'Sumo Deadlift', sets: 4, reps: '6-8', muscle: 'Hamstrings/Glutes', rest: 120 },
      { name: 'Hack Squat Machine', sets: 3, reps: '10-12', muscle: 'Quads', rest: 90 },
      { name: 'Glute-Ham Raise', sets: 3, reps: '8-10', muscle: 'Hamstrings', rest: 75 },
      { name: 'Single-Leg Press', sets: 3, reps: '10 each', muscle: 'Quads', rest: 75 },
      { name: 'Seated Calf Raises', sets: 4, reps: '15-20', muscle: 'Calves', rest: 60 },
      { name: 'Cable Pull-Through', sets: 3, reps: '12-15', muscle: 'Glutes', rest: 60 }
    ]
  },
  cardio: {
    id: 'cardio',
    name: 'Light Active Recovery',
    type: 'cardio',
    muscles: 'Full Body / Mobility',
    icon: 'fa-heart-pulse',
    duration: '20-30 min',
    exercises: [
      { name: 'Brisk Walking (Incline)', sets: 1, reps: '10 min', muscle: 'Cardio', rest: 0 },
      { name: 'Foam Rolling (Full Body)', sets: 1, reps: '5 min', muscle: 'Recovery', rest: 0 },
      { name: 'Dynamic Stretching', sets: 1, reps: '5 min', muscle: 'Mobility', rest: 0 },
      { name: 'Light Cycling', sets: 1, reps: '10 min', muscle: 'Cardio', rest: 0 }
    ]
  }
};

// Weekly schedule: PPL PPL Rest (with variations on second cycle)
const WEEKLY_SCHEDULE = [
  { day: 'Mon', workout: 'push', label: 'Push' },
  { day: 'Tue', workout: 'pull', label: 'Pull' },
  { day: 'Wed', workout: 'legs', label: 'Legs' },
  { day: 'Thu', workout: 'push2', label: 'Push' },
  { day: 'Fri', workout: 'pull2', label: 'Pull' },
  { day: 'Sat', workout: 'legs2', label: 'Legs' },
  { day: 'Sun', workout: 'cardio', label: 'Rest' }
];

// ===== APP STATE =====
let state = {
  currentPage: 'home',
  selectedWorkout: null,
  activeWorkout: null,
  timerInterval: null,
  restInterval: null,
  workoutStartTime: null,
  weekOffset: 0, // 0 = current week, -1 = previous, +1 = next
  settings: {
    restTimer: 90,
    weekStart: 1,
    darkMode: true
  },
  history: [],
  completedDays: []
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initApp();
});

function initApp() {
  // Show splash, then app
  setTimeout(() => {
    document.getElementById('splash').classList.add('fade-out');
    document.getElementById('app').classList.remove('hidden');
  }, 1500);

  renderWeekDays();
  renderTodayWorkout();
  renderCustomWorkoutGrid();
  renderStats();
  setupEventListeners();
  registerServiceWorker();
}

// ===== SERVICE WORKER =====
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

// ===== STATE MANAGEMENT =====
function loadState() {
  const saved = localStorage.getItem('ppl-state');
  if (saved) {
    const parsed = JSON.parse(saved);
    state.settings = { ...state.settings, ...parsed.settings };
    state.history = parsed.history || [];
    state.completedDays = parsed.completedDays || [];
  }
}

function saveState() {
  localStorage.setItem('ppl-state', JSON.stringify({
    settings: state.settings,
    history: state.history,
    completedDays: state.completedDays
  }));
}

// ===== NAVIGATION =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navBtn) navBtn.classList.add('active');
  state.currentPage = page;
}

// ===== RENDER FUNCTIONS =====
function renderWeekDays() {
  const container = document.getElementById('weekDays');
  const today = new Date();
  const todayDay = today.getDay();
  const todayIdx = todayDay === 0 ? 6 : todayDay - 1;

  // Update week title
  const weekMonday = getMondayOfWeek(state.weekOffset);
  const weekSunday = new Date(weekMonday);
  weekSunday.setDate(weekMonday.getDate() + 6);
  const titleEl = document.getElementById('weekTitle');
  if (state.weekOffset === 0) {
    titleEl.textContent = 'This Week';
  } else {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    titleEl.textContent = `${monthNames[weekMonday.getMonth()]} ${weekMonday.getDate()} - ${monthNames[weekSunday.getMonth()]} ${weekSunday.getDate()}`;
  }

  container.innerHTML = WEEKLY_SCHEDULE.map((day, idx) => {
    const isToday = (state.weekOffset === 0 && idx === todayIdx);
    const dateObj = getDateForDayIndex(idx);
    const dateStr = dateObj.toISOString().split('T')[0];
    const isCompleted = state.completedDays.includes(dateStr);

    return `
      <div class="day-card ${isToday ? 'today' : ''} ${isCompleted ? 'completed' : ''}" 
           onclick="selectDay(${idx})">
        <div class="day-name">${day.day}</div>
        <div class="day-num">${dateObj.getDate()}</div>
        <div class="day-type">${day.label}</div>
      </div>
    `;
  }).join('');
}

function getMondayOfWeek(offset) {
  const today = new Date();
  const currentDay = today.getDay();
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset + (offset * 7));
  return monday;
}

function getDateForDayIndex(idx) {
  const monday = getMondayOfWeek(state.weekOffset);
  const date = new Date(monday);
  date.setDate(monday.getDate() + idx);
  return date;
}

function changeWeek(direction) {
  state.weekOffset += direction;
  renderWeekDays();
}

function renderTodayWorkout() {
  const container = document.getElementById('todayWorkout');
  const today = new Date().getDay();
  const todayIdx = today === 0 ? 6 : today - 1;
  const schedule = WEEKLY_SCHEDULE[todayIdx];
  const workout = WORKOUTS[schedule.workout];

  container.innerHTML = `
    <h2 class="section-title">Today's Workout</h2>
    <div class="today-card" onclick="openWorkout('${schedule.workout}')">
      <span class="card-badge badge-${workout.type}">${workout.type}</span>
      <h3>${workout.name}</h3>
      <div class="card-meta">
        <span><i class="fas fa-clock"></i>${workout.duration}</span>
        <span><i class="fas fa-fire"></i>${workout.exercises.length} exercises</span>
        <span><i class="fas fa-bullseye"></i>${workout.muscles.split(',')[0]}</span>
      </div>
    </div>

    <h2 class="section-title" style="margin-top:1.5rem">All Workouts</h2>
    <div class="workout-type-list">
      <div class="workout-type-card" onclick="openWorkout('push')">
        <div class="workout-type-icon icon-push"><i class="fas fa-hand-fist"></i></div>
        <div class="workout-type-info">
          <h4>Push Day</h4>
          <p>Chest, Shoulders, Triceps • 8 exercises</p>
        </div>
      </div>
      <div class="workout-type-card" onclick="openWorkout('pull')">
        <div class="workout-type-icon icon-pull"><i class="fas fa-arrow-up"></i></div>
        <div class="workout-type-info">
          <h4>Pull Day</h4>
          <p>Back, Biceps, Rear Delts • 8 exercises</p>
        </div>
      </div>
      <div class="workout-type-card" onclick="openWorkout('legs')">
        <div class="workout-type-icon icon-legs"><i class="fas fa-person-walking"></i></div>
        <div class="workout-type-info">
          <h4>Leg Day</h4>
          <p>Quads, Hamstrings, Glutes, Calves • 8 exercises</p>
        </div>
      </div>
    </div>
  `;
}

// ===== CUSTOM WORKOUT PICKER =====
function renderCustomWorkoutGrid() {
  const container = document.getElementById('customWorkoutGrid');
  container.innerHTML = `
    <button class="custom-btn push-btn" onclick="showCustomOptions('push')">
      <i class="fas fa-hand-fist"></i>
      <span>Push</span>
    </button>
    <button class="custom-btn pull-btn" onclick="showCustomOptions('pull')">
      <i class="fas fa-arrow-up"></i>
      <span>Pull</span>
    </button>
    <button class="custom-btn legs-btn" onclick="showCustomOptions('legs')">
      <i class="fas fa-person-walking"></i>
      <span>Legs</span>
    </button>
  `;
}

function showCustomOptions(type) {
  const modal = document.getElementById('customModal');
  const optionsContainer = document.getElementById('customModalOptions');
  
  const workoutMap = {
    push: ['push', 'push2'],
    pull: ['pull', 'pull2'],
    legs: ['legs', 'legs2']
  };

  const ids = workoutMap[type];
  optionsContainer.innerHTML = ids.map(id => {
    const w = WORKOUTS[id];
    return `
      <button class="custom-option-btn" onclick="selectCustomWorkout('${id}')">
        ${w.name}
        <span class="option-sub">${w.muscles} • ${w.exercises.length} exercises</span>
      </button>
    `;
  }).join('');

  modal.classList.remove('hidden');
}

function selectCustomWorkout(workoutId) {
  document.getElementById('customModal').classList.add('hidden');
  openWorkout(workoutId);
}

function closeCustomModal() {
  document.getElementById('customModal').classList.add('hidden');
}

function openWorkout(workoutId) {
  state.selectedWorkout = workoutId;
  const workout = WORKOUTS[workoutId];

  document.getElementById('workoutHeader').innerHTML = `
    <span class="card-badge badge-${workout.type}">${workout.type.toUpperCase()}</span>
    <h2>${workout.name}</h2>
    <p class="muscles">${workout.muscles}</p>
    <p class="muscles" style="margin-top:0.3rem; font-size:0.8rem"><i class="fas fa-clock"></i> ${workout.duration} • ${workout.exercises.length} exercises</p>
  `;

  document.getElementById('exerciseList').innerHTML = workout.exercises.map((ex, i) => `
    <div class="exercise-card clickable" onclick="showExerciseVideo('${ex.name.replace(/'/g, "\\'")}', '${ex.muscle}', '${ex.sets}', '${ex.reps}', '${ex.rest}')">
      <div class="exercise-num">${i + 1}</div>
      <div class="exercise-info">
        <h4>${ex.name}</h4>
        <p class="exercise-detail">${ex.sets} sets × ${ex.reps} • Rest ${ex.rest}s</p>
      </div>
      <i class="fas fa-play-circle play-hint"></i>
    </div>
  `).join('');

  navigateTo('workout');
}

// ===== EXERCISE VIDEO MODAL =====
function showExerciseVideo(name, muscle, sets, reps, rest) {
  const modal = document.getElementById('exerciseModal');
  const videoContainer = document.getElementById('exerciseVideoContainer');
  const infoContainer = document.getElementById('exerciseModalInfo');

  const exerciseData = EXERCISE_VIDEOS[name];
  
  if (exerciseData && exerciseData.videoId) {
    videoContainer.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${exerciseData.videoId}?rel=0&modestbranding=1&playsinline=1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else {
    videoContainer.innerHTML = `
      <div class="video-placeholder">
        <i class="fas fa-dumbbell"></i>
        <span>Demo coming soon</span>
      </div>
    `;
  }

  infoContainer.innerHTML = `
    <h3>${name}</h3>
    <span class="modal-muscle">${muscle}</span>
    <div class="modal-details">
      <span><strong>${sets}</strong> sets</span>
      <span><strong>${reps}</strong> reps</span>
      <span><strong>${rest}s</strong> rest</span>
    </div>
    ${exerciseData && exerciseData.tips ? `
      <div class="modal-tips">
        <strong>Tips</strong>
        ${exerciseData.tips}
      </div>
    ` : ''}
  `;

  modal.classList.remove('hidden');
}

function closeExerciseModal() {
  const modal = document.getElementById('exerciseModal');
  // Stop video playback by clearing iframe
  document.getElementById('exerciseVideoContainer').innerHTML = '';
  modal.classList.add('hidden');
}

// ===== ACTIVE WORKOUT =====
function startWorkout() {
  const workout = WORKOUTS[state.selectedWorkout];
  state.activeWorkout = {
    id: state.selectedWorkout,
    exercises: workout.exercises.map(ex => ({
      ...ex,
      completedSets: Array(ex.sets).fill(null).map(() => ({ weight: '', reps: '', done: false }))
    }))
  };
  state.workoutStartTime = Date.now();

  renderActiveWorkout();
  startTimer();
  navigateTo('active');
}

function renderActiveWorkout() {
  const container = document.getElementById('activeExercises');
  container.innerHTML = state.activeWorkout.exercises.map((ex, exIdx) => `
    <div class="active-exercise-card">
      <h4>${ex.name} <span style="font-weight:400;color:var(--text-secondary);font-size:0.8rem">(${ex.muscle})</span></h4>
      <div class="sets-table">
        ${ex.completedSets.map((set, setIdx) => `
          <div class="set-row">
            <span class="set-num">Set ${setIdx + 1}</span>
            <div class="set-input">
              <div>
                <input type="number" placeholder="${ex.reps}" 
                       id="reps-${exIdx}-${setIdx}" 
                       value="${set.reps}">
                <label>Reps</label>
              </div>
              <div>
                <input type="number" placeholder="kg" 
                       id="weight-${exIdx}-${setIdx}"
                       value="${set.weight}">
                <label>Weight</label>
              </div>
            </div>
            <button class="btn-set-done ${set.done ? 'completed' : ''}" 
                    onclick="completeSet(${exIdx}, ${setIdx})">
              <i class="fas fa-check"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function completeSet(exIdx, setIdx) {
  const repsInput = document.getElementById(`reps-${exIdx}-${setIdx}`);
  const weightInput = document.getElementById(`weight-${exIdx}-${setIdx}`);

  state.activeWorkout.exercises[exIdx].completedSets[setIdx] = {
    reps: repsInput.value,
    weight: weightInput.value,
    done: true
  };

  const btn = repsInput.closest('.set-row').querySelector('.btn-set-done');
  btn.classList.add('completed');

  // Show rest timer
  const restTime = state.activeWorkout.exercises[exIdx].rest;
  if (restTime > 0) {
    showRestTimer(restTime);
  }
}

// ===== TIMER =====
function startTimer() {
  const timerEl = document.getElementById('workoutTimer');
  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.workoutStartTime) / 1000);
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');
    timerEl.textContent = `${mins}:${secs}`;
  }, 1000);
}

// ===== REST TIMER =====
function showRestTimer(seconds) {
  const modal = document.getElementById('restModal');
  const circle = document.getElementById('restCircle');
  const display = document.getElementById('restTimeDisplay');
  const circumference = 2 * Math.PI * 45;

  modal.classList.remove('hidden');
  let remaining = seconds;
  display.textContent = remaining;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = 0;

  state.restInterval = setInterval(() => {
    remaining--;
    display.textContent = remaining;
    const progress = ((seconds - remaining) / seconds) * circumference;
    circle.style.strokeDashoffset = progress;

    if (remaining <= 0) {
      clearInterval(state.restInterval);
      modal.classList.add('hidden');
      if (navigator.vibrate) navigator.vibrate(200);
    }
  }, 1000);
}

function skipRest() {
  clearInterval(state.restInterval);
  document.getElementById('restModal').classList.add('hidden');
}

// ===== FINISH WORKOUT =====
function finishWorkout() {
  clearInterval(state.timerInterval);
  const duration = Math.floor((Date.now() - state.workoutStartTime) / 1000);
  const workout = WORKOUTS[state.selectedWorkout];

  let totalSets = 0;
  let totalVolume = 0;
  state.activeWorkout.exercises.forEach(ex => {
    ex.completedSets.forEach(set => {
      if (set.done) {
        totalSets++;
        totalVolume += (parseFloat(set.weight) || 0) * (parseInt(set.reps) || 0);
      }
    });
  });

  // Save to history
  const record = {
    date: new Date().toISOString(),
    workout: workout.name,
    type: workout.type,
    duration: duration,
    sets: totalSets,
    volume: totalVolume
  };
  state.history.unshift(record);

  // Mark day complete
  const today = new Date().toISOString().split('T')[0];
  if (!state.completedDays.includes(today)) {
    state.completedDays.push(today);
  }

  saveState();

  // Show completion modal
  const mins = Math.floor(duration / 60);
  document.getElementById('completeStats').innerHTML = `
    <div class="complete-stat"><div class="val">${mins}</div><div class="lbl">Minutes</div></div>
    <div class="complete-stat"><div class="val">${totalSets}</div><div class="lbl">Sets</div></div>
    <div class="complete-stat"><div class="val">${Math.round(totalVolume)}</div><div class="lbl">Volume (kg)</div></div>
  `;
  document.getElementById('completeModal').classList.remove('hidden');

  state.activeWorkout = null;
}

function closeComplete() {
  document.getElementById('completeModal').classList.add('hidden');
  renderWeekDays();
  renderStats();
  navigateTo('home');
}

// ===== STATS =====
function renderStats() {
  const grid = document.getElementById('statsGrid');
  const totalWorkouts = state.history.length;
  const totalVolume = state.history.reduce((sum, h) => sum + h.volume, 0);
  const totalTime = state.history.reduce((sum, h) => sum + h.duration, 0);
  const streak = calculateStreak();

  grid.innerHTML = `
    <div class="stat-card"><div class="stat-value">${totalWorkouts}</div><div class="stat-label">Workouts</div></div>
    <div class="stat-card"><div class="stat-value">${streak}</div><div class="stat-label">Day Streak</div></div>
    <div class="stat-card"><div class="stat-value">${Math.round(totalVolume / 1000)}k</div><div class="stat-label">Total Vol (kg)</div></div>
    <div class="stat-card"><div class="stat-value">${Math.round(totalTime / 3600)}h</div><div class="stat-label">Total Time</div></div>
  `;

  const historyList = document.getElementById('historyList');
  if (state.history.length === 0) {
    historyList.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:2rem">No workouts yet. Start your first one!</p>';
  } else {
    historyList.innerHTML = '<h3 class="section-title" style="margin-top:1rem">Recent Workouts</h3>' +
      state.history.slice(0, 20).map(h => {
        const date = new Date(h.date);
        const mins = Math.floor(h.duration / 60);
        return `
          <div class="history-item">
            <div class="history-info">
              <h4>${h.workout}</h4>
              <p>${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
            </div>
            <span class="history-duration">${mins} min • ${h.sets} sets</span>
          </div>
        `;
      }).join('');
  }
}

function calculateStreak() {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    if (state.completedDays.includes(dateStr)) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  return streak;
}

// ===== DAY SELECTION =====
function selectDay(idx) {
  const schedule = WEEKLY_SCHEDULE[idx];
  openWorkout(schedule.workout);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Bottom navigation
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page === 'workout') {
        const today = new Date().getDay();
        const todayIdx = today === 0 ? 6 : today - 1;
        openWorkout(WEEKLY_SCHEDULE[todayIdx].workout);
      } else {
        navigateTo(page);
      }
    });
  });

  // Week navigation
  document.getElementById('btnPrevWeek').addEventListener('click', () => changeWeek(-1));
  document.getElementById('btnNextWeek').addEventListener('click', () => changeWeek(1));

  // Header buttons
  document.getElementById('btnStats').addEventListener('click', () => {
    renderStats();
    navigateTo('stats');
  });
  document.getElementById('btnSettings').addEventListener('click', () => navigateTo('settings'));

  // Start workout
  document.getElementById('btnStartWorkout').addEventListener('click', startWorkout);

  // Finish workout
  document.getElementById('btnFinishWorkout').addEventListener('click', () => {
    if (confirm('Finish this workout?')) {
      finishWorkout();
    }
  });

  // Rest timer skip
  document.getElementById('btnSkipRest').addEventListener('click', skipRest);

  // Complete modal close
  document.getElementById('btnCompleteClose').addEventListener('click', closeComplete);

  // Custom modal close
  document.getElementById('btnCustomClose').addEventListener('click', closeCustomModal);

  // Exercise video modal close
  document.getElementById('btnCloseExercise').addEventListener('click', closeExerciseModal);
  document.getElementById('exerciseModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('exerciseModal')) closeExerciseModal();
  });

  // Settings
  document.getElementById('restTimer').addEventListener('change', (e) => {
    state.settings.restTimer = parseInt(e.target.value);
    saveState();
  });

  document.getElementById('btnResetData').addEventListener('click', () => {
    if (confirm('Are you sure? This will delete all your workout history.')) {
      localStorage.removeItem('ppl-state');
      state.history = [];
      state.completedDays = [];
      renderWeekDays();
      renderStats();
      renderTodayWorkout();
    }
  });
}
