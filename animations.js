// ===== ANIMATED EXERCISE DEMOS (CSS + SVG) =====
// Each exercise has an inline SVG animation showing the movement pattern

const EXERCISE_ANIMATIONS = {
  'Barbell Bench Press': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="30" y="70" width="140" height="8" rx="4" fill="#333" class="bench"/>
      <!-- Person lying on bench -->
      <circle cx="100" cy="58" r="10" fill="#e94560" class="head"/>
      <line x1="100" y1="68" x2="100" y2="90" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <!-- Arms with barbell -->
      <g class="anim-bench-press">
        <line x1="70" y1="50" x2="100" y2="68" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="130" y1="50" x2="100" y2="68" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="50" y="46" width="100" height="6" rx="3" fill="#a0a0b0"/>
        <rect x="45" y="42" width="12" height="14" rx="3" fill="#6c6c7e"/>
        <rect x="143" y="42" width="12" height="14" rx="3" fill="#6c6c7e"/>
      </g>
      <line x1="85" y1="90" x2="75" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="115" y1="90" x2="125" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Incline Dumbbell Press': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <polygon points="40,100 90,100 70,50" fill="#333"/>
      <circle cx="85" cy="42" r="9" fill="#e94560"/>
      <line x1="85" y1="51" x2="80" y2="80" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-incline-press">
        <line x1="60" y1="40" x2="80" y2="58" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="110" y1="40" x2="80" y2="58" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="54" y="36" width="12" height="8" rx="3" fill="#a0a0b0"/>
        <rect x="104" y="36" width="12" height="8" rx="3" fill="#a0a0b0"/>
      </g>
      <line x1="75" y1="80" x2="65" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="85" y1="80" x2="95" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Overhead Press (Barbell)': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <circle cx="100" cy="25" r="10" fill="#e94560"/>
      <line x1="100" y1="35" x2="100" y2="75" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-ohp">
        <line x1="70" y1="20" x2="100" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="130" y1="20" x2="100" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="55" y="16" width="90" height="6" rx="3" fill="#a0a0b0"/>
        <rect x="50" y="12" width="12" height="14" rx="3" fill="#6c6c7e"/>
        <rect x="138" y="12" width="12" height="14" rx="3" fill="#6c6c7e"/>
      </g>
      <line x1="90" y1="75" x2="80" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="75" x2="120" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Dumbbell Lateral Raises': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <circle cx="100" cy="20" r="10" fill="#e94560"/>
      <line x1="100" y1="30" x2="100" y2="70" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-lateral-raise">
        <line x1="60" y1="55" x2="100" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="140" y1="55" x2="100" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="54" y="52" width="10" height="8" rx="3" fill="#a0a0b0"/>
        <rect x="136" y="52" width="10" height="8" rx="3" fill="#a0a0b0"/>
      </g>
      <line x1="90" y1="70" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="70" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Cable Chest Flyes': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="10" y="10" width="6" height="100" rx="3" fill="#333"/>
      <rect x="184" y="10" width="6" height="100" rx="3" fill="#333"/>
      <circle cx="100" cy="25" r="10" fill="#e94560"/>
      <line x1="100" y1="35" x2="100" y2="75" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-fly">
        <line x1="80" y1="50" x2="100" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="120" y1="50" x2="100" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="13" y1="30" x2="80" y2="50" stroke="#6c6c7e" stroke-width="2" stroke-dasharray="4"/>
        <line x1="187" y1="30" x2="120" y2="50" stroke="#6c6c7e" stroke-width="2" stroke-dasharray="4"/>
      </g>
      <line x1="90" y1="75" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="75" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Tricep Rope Pushdowns': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="95" y="5" width="10" height="30" rx="3" fill="#333"/>
      <circle cx="100" cy="40" r="10" fill="#e94560"/>
      <line x1="100" y1="50" x2="100" y2="80" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-pushdown">
        <line x1="90" y1="90" x2="100" y2="60" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="110" y1="90" x2="100" y2="60" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="90" y1="90" x2="100" y2="35" stroke="#6c6c7e" stroke-width="2" stroke-dasharray="4"/>
        <line x1="110" y1="90" x2="100" y2="35" stroke="#6c6c7e" stroke-width="2" stroke-dasharray="4"/>
      </g>
      <line x1="90" y1="80" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="80" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Overhead Tricep Extension': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <circle cx="100" cy="20" r="10" fill="#e94560"/>
      <line x1="100" y1="30" x2="100" y2="70" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-tricep-ext">
        <line x1="90" y1="10" x2="100" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="110" y1="10" x2="100" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="85" y="4" width="30" height="10" rx="4" fill="#a0a0b0"/>
      </g>
      <line x1="90" y1="70" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="70" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Push-Ups (Burnout)': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <line x1="20" y1="100" x2="180" y2="100" stroke="#333" stroke-width="3"/>
      <g class="anim-pushup">
        <circle cx="50" cy="55" r="9" fill="#e94560"/>
        <line x1="55" y1="62" x2="130" y2="68" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="60" y1="70" x2="55" y2="95" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="75" y1="72" x2="70" y2="95" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="130" y1="68" x2="145" y2="95" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`,

  'Deadlift (Conventional)': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <g class="anim-deadlift">
        <circle cx="100" cy="22" r="10" fill="#e94560"/>
        <line x1="100" y1="32" x2="100" y2="65" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="85" y1="50" x2="85" y2="70" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="115" y1="50" x2="115" y2="70" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="60" y="68" width="80" height="6" rx="3" fill="#a0a0b0"/>
        <circle cx="55" cy="71" r="8" fill="none" stroke="#6c6c7e" stroke-width="3"/>
        <circle cx="145" cy="71" r="8" fill="none" stroke="#6c6c7e" stroke-width="3"/>
      </g>
      <line x1="90" y1="65" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="65" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Pull-Ups / Lat Pulldown': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="40" y="8" width="120" height="6" rx="3" fill="#333"/>
      <g class="anim-pullup">
        <circle cx="100" cy="30" r="10" fill="#e94560"/>
        <line x1="100" y1="40" x2="100" y2="75" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="80" y1="14" x2="100" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="120" y1="14" x2="100" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      </g>
      <line x1="90" y1="75" x2="85" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="75" x2="115" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Barbell Bent-Over Row': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <g class="anim-row">
        <circle cx="80" cy="30" r="10" fill="#e94560"/>
        <line x1="80" y1="40" x2="110" y2="70" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="90" y1="80" x2="90" y2="60" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="110" y1="80" x2="110" y2="60" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="70" y="78" width="60" height="5" rx="2" fill="#a0a0b0"/>
        <circle cx="65" cy="80" r="7" fill="none" stroke="#6c6c7e" stroke-width="3"/>
        <circle cx="135" cy="80" r="7" fill="none" stroke="#6c6c7e" stroke-width="3"/>
      </g>
      <line x1="110" y1="70" x2="105" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="115" y1="70" x2="125" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Seated Cable Row': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="170" y="20" width="8" height="80" rx="3" fill="#333"/>
      <rect x="40" y="80" width="80" height="6" rx="3" fill="#333"/>
      <circle cx="80" cy="50" r="10" fill="#e94560"/>
      <line x1="80" y1="60" x2="80" y2="78" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-seated-row">
        <line x1="110" y1="65" x2="80" y2="60" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="174" y1="50" x2="110" y2="65" stroke="#6c6c7e" stroke-width="2" stroke-dasharray="4"/>
      </g>
      <line x1="75" y1="78" x2="60" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="85" y1="78" x2="100" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Face Pulls': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="170" y="20" width="8" height="60" rx="3" fill="#333"/>
      <circle cx="100" cy="30" r="10" fill="#e94560"/>
      <line x1="100" y1="40" x2="100" y2="80" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-face-pull">
        <line x1="120" y1="30" x2="100" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="120" y1="35" x2="100" y2="45" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="174" y1="40" x2="120" y2="32" stroke="#6c6c7e" stroke-width="2" stroke-dasharray="4"/>
      </g>
      <line x1="90" y1="80" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="80" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Barbell Bicep Curls': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <circle cx="100" cy="20" r="10" fill="#e94560"/>
      <line x1="100" y1="30" x2="100" y2="70" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-curl">
        <line x1="85" y1="50" x2="100" y2="42" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="115" y1="50" x2="100" y2="42" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="70" y="47" width="60" height="5" rx="2" fill="#a0a0b0"/>
        <rect x="65" y="44" width="10" height="11" rx="3" fill="#6c6c7e"/>
        <rect x="125" y="44" width="10" height="11" rx="3" fill="#6c6c7e"/>
      </g>
      <line x1="90" y1="70" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="70" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Hammer Curls': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <circle cx="100" cy="20" r="10" fill="#e94560"/>
      <line x1="100" y1="30" x2="100" y2="70" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-hammer-curl">
        <line x1="85" y1="48" x2="92" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="115" y1="48" x2="108" y2="40" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="80" y="45" width="6" height="14" rx="2" fill="#a0a0b0"/>
        <rect x="114" y="45" width="6" height="14" rx="2" fill="#a0a0b0"/>
      </g>
      <line x1="90" y1="70" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="70" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Barbell Back Squat': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <g class="anim-squat">
        <circle cx="100" cy="20" r="10" fill="#e94560"/>
        <line x1="100" y1="30" x2="100" y2="60" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <rect x="70" y="25" width="60" height="5" rx="2" fill="#a0a0b0"/>
        <rect x="65" y="22" width="10" height="11" rx="3" fill="#6c6c7e"/>
        <rect x="125" y="22" width="10" height="11" rx="3" fill="#6c6c7e"/>
      </g>
      <line x1="90" y1="60" x2="80" y2="85" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="110" y1="60" x2="120" y2="85" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="80" y1="85" x2="78" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="120" y1="85" x2="122" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Romanian Deadlift': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <g class="anim-rdl">
        <circle cx="90" cy="28" r="10" fill="#e94560"/>
        <line x1="90" y1="38" x2="105" y2="65" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="90" y1="50" x2="80" y2="75" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <line x1="95" y1="50" x2="105" y2="75" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <rect x="65" y="73" width="55" height="5" rx="2" fill="#a0a0b0"/>
        <circle cx="60" cy="75" r="7" fill="none" stroke="#6c6c7e" stroke-width="3"/>
        <circle cx="125" cy="75" r="7" fill="none" stroke="#6c6c7e" stroke-width="3"/>
      </g>
      <line x1="105" y1="65" x2="100" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      <line x1="108" y1="65" x2="115" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  'Leg Press': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <polygon points="140,30 180,100 140,100" fill="#333"/>
      <circle cx="80" cy="70" r="10" fill="#e94560"/>
      <line x1="80" y1="60" x2="80" y2="85" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-leg-press">
        <line x1="80" y1="85" x2="130" y2="60" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <line x1="80" y1="88" x2="130" y2="70" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <rect x="128" y="55" width="15" height="20" rx="3" fill="#a0a0b0"/>
      </g>
    </svg>`,

  'Walking Lunges': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <g class="anim-lunge">
        <circle cx="100" cy="20" r="10" fill="#e94560"/>
        <line x1="100" y1="30" x2="100" y2="60" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="100" y1="60" x2="75" y2="90" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <line x1="75" y1="90" x2="75" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <line x1="100" y1="60" x2="125" y2="85" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <line x1="125" y1="85" x2="130" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`,

  'Standing Calf Raises': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="70" y="95" width="60" height="8" rx="3" fill="#333"/>
      <g class="anim-calf-raise">
        <circle cx="100" cy="20" r="10" fill="#e94560"/>
        <line x1="100" y1="30" x2="100" y2="65" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <line x1="92" y1="65" x2="88" y2="90" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <line x1="108" y1="65" x2="112" y2="90" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`,

  'Hip Thrusts (Barbell)': `
    <svg viewBox="0 0 200 120" class="exercise-anim">
      <rect x="30" y="55" width="40" height="25" rx="5" fill="#333"/>
      <g class="anim-hip-thrust">
        <circle cx="55" cy="45" r="9" fill="#e94560"/>
        <line x1="60" y1="52" x2="110" y2="55" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
        <rect x="85" y="50" width="40" height="5" rx="2" fill="#a0a0b0"/>
        <circle cx="80" cy="52" r="6" fill="none" stroke="#6c6c7e" stroke-width="2"/>
        <circle cx="130" cy="52" r="6" fill="none" stroke="#6c6c7e" stroke-width="2"/>
        <line x1="110" y1="58" x2="130" y2="90" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
        <line x1="130" y1="90" x2="120" y2="105" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`
};

// Default animation for exercises without specific SVG
const DEFAULT_ANIMATION = `
  <svg viewBox="0 0 200 120" class="exercise-anim">
    <circle cx="100" cy="30" r="10" fill="#e94560"/>
    <line x1="100" y1="40" x2="100" y2="75" stroke="#e94560" stroke-width="4" stroke-linecap="round"/>
    <g class="anim-generic">
      <line x1="70" y1="55" x2="100" y2="50" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <line x1="130" y1="55" x2="100" y2="50" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    </g>
    <line x1="90" y1="75" x2="82" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    <line x1="110" y1="75" x2="118" y2="110" stroke="#e94560" stroke-width="3" stroke-linecap="round"/>
    <text x="100" y="115" text-anchor="middle" fill="#6c6c7e" font-size="7" font-family="Inter, sans-serif">Exercise Demo</text>
  </svg>`;

function getExerciseAnimation(name) {
  return EXERCISE_ANIMATIONS[name] || DEFAULT_ANIMATION;
}
