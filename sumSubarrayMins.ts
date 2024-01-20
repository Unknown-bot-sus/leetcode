function sumSubarrayMins(arr: number[]): number {
  const MOD = 10 ** 9 + 7;
  const n = arr.length;
  const stack: number[] = [];
  let result = 0;

  for (let i = 0; i <= n; i++) {
    while (
      stack.length > 0 &&
      (i === n || arr[i] < arr[stack[stack.length - 1]])
    ) {
      const top = stack.pop()!;
      const left = stack.length > 0 ? stack[stack.length - 1] : -1;
      result = (result + arr[top] * (i - top) * (top - left)) % MOD;
    }
    stack.push(i);
  }

  return result;
}

console.log(
  sumSubarrayMins([
    29966, 29916, 29835, 29792, 29758, 29621, 29593, 29438, 29386, 29336, 29223,
    29143, 29084, 29047, 28958, 28898, 28891, 28798, 28705, 28682, 28560, 28446,
    28268, 28204, 28117, 28009, 27796, 27711, 27669, 27606, 27472, 27329, 27301,
    27295, 27249, 27185, 27102, 26993, 26933, 26769, 26730, 26604, 26439, 26437,
    26372, 26314, 26295, 26182, 26155, 26110, 26086, 26051, 25912, 25858, 25842,
    25785, 25707, 25585, 25498, 25443, 25416, 25388, 25311, 25303, 25291, 25255,
    25208, 25166, 25108, 25011, 24879, 24860, 24767, 24732, 24683, 24550, 24506,
    24407, 24356, 24303, 24114, 24103, 24046, 24017, 23942, 23855, 23814, 23804,
    23786, 23735, 23711, 23693, 23606, 23558, 23476, 23391, 23326, 23313, 23300,
    23225, 23181, 23170, 23090, 23067, 23058, 22985, 22948, 22846, 22796, 22771,
    22749, 22581, 22488, 22353, 22183, 22151, 22117, 22078, 22047, 22011, 21988,
    21943, 21904, 21884, 21872, 21842, 21797, 21785, 21753, 21628, 21537, 21525,
    21424, 21366, 21330, 21257, 21193, 21113, 21101, 20969, 20938, 20838, 20719,
    20649, 20557, 20521, 20477, 20432, 20390, 20362, 20264, 20190, 20145, 20095,
    20063, 19924, 19838, 19730, 19703, 19691, 19659, 19582, 19560, 19542, 19428,
    19412, 19407, 19395, 19274, 19160, 19074, 19050, 18956, 18927, 18840, 18663,
    18631, 18593, 18557, 18473, 18455, 18373, 18315, 18238, 18218, 18188, 18133,
    18060, 18007, 17984, 17912, 17854, 17829, 17712, 17622, 17577, 17496, 17481,
    17462, 17434, 17348, 17227, 17176, 17156, 17129, 17028, 16956, 16879, 16770,
    16712, 16595, 16475, 16438, 16399, 16336, 16149, 16095, 16067, 16030, 15994,
    15956, 15943, 15793, 15760, 15604, 15570, 15512, 15500, 15465, 15431, 15375,
    15335, 15268, 15226, 15176, 15130, 15056, 15041, 15034, 14999, 14945, 14829,
    14807, 14655, 14589, 14431, 14397, 14316, 14238, 14192, 14171, 14151, 14072,
    14051, 14031, 14006, 13988, 13921, 13666, 13540, 13504, 13474, 13324, 13208,
    13205, 13189, 13087, 13000, 12984, 12954, 12922, 12903, 12837, 12781, 12774,
    12741, 12707, 12585, 12572, 12544, 12471, 12373, 12359, 12315, 12258, 12166,
    12145, 12099, 12051, 11974, 11935, 11903, 11849, 11794, 11752, 11686, 11664,
    11540, 11463, 11430, 11413, 11369, 11281, 11234, 11218, 11159, 11136, 11121,
    11037, 11004, 10985, 10855, 10810, 10701, 10663, 10646, 10563, 10536, 10426,
    10385, 10267, 10241, 10149, 10047, 10012, 9950, 9917, 9850, 9779, 9748,
    9584, 9568, 9504, 9490, 9260, 9129, 9109, 9109, 9068, 9018, 8918, 8881,
    8840, 8780, 8742, 8666, 8647, 8629, 8533, 8512, 8369, 8226, 8200, 8166,
    8080, 8041, 8016, 7982, 7883, 7788, 7628, 7511, 7463, 7454, 7400, 7351,
    7334, 7260, 7163, 7061, 7023, 6980, 6908, 6889, 6876, 6797, 6669, 6649,
    6610, 6574, 6529, 6410, 6346, 6263, 6259, 6240, 6148, 6068, 6008, 5882,
    5839, 5791, 5716, 5687, 5676, 5652, 5642, 5614, 5589, 5577, 5548, 5478,
    5467, 5431, 5425, 5395, 5384, 5307, 5305, 5291, 5243, 5203, 5197, 5177,
    5165, 5106, 5085, 5040, 4918, 4889, 4874, 4819, 4751, 4719, 4621, 4588,
    4570, 4486, 4421, 4402, 4380, 4344, 4291, 4246, 4164, 4127, 4028, 3943,
    3830, 3717, 3626, 3575, 3530, 3522, 3459, 3412, 3233, 3168, 3092, 3001,
    2940, 2879, 2843, 2833, 2772, 2707, 2690, 2503, 2484, 2326, 2296, 2247,
    2216, 2170, 2151, 2109, 2101, 1837, 1807, 1779, 1740, 1654, 1479, 1458,
    1349, 1312, 1281, 1141, 1098, 1093, 1032, 948, 904, 890, 840, 757, 737, 664,
    637, 609, 588, 536, 510, 469, 397, 330, 272, 254, 158, 91, 67, 103, 226,
    263, 297, 367, 435, 490, 527, 570, 590, 616, 645, 730, 753, 789, 844, 892,
    927, 1029, 1075, 1097, 1112, 1221, 1311, 1319, 1350, 1463, 1570, 1739, 1749,
    1793, 1818, 2061, 2103, 2135, 2151, 2193, 2237, 2263, 2312, 2369, 2496,
    2586, 2706, 2729, 2787, 2838, 2873, 2930, 2990, 3007, 3109, 3170, 3292,
    3443, 3477, 3525, 3532, 3620, 3648, 3815, 3853, 3966, 4077, 4153, 4174,
    4290, 4342, 4376, 4385, 4414, 4443, 4507, 4586, 4609, 4656, 4747, 4795,
    4836, 4885, 4916, 5038, 5060, 5092, 5133, 5176, 5197, 5203, 5215, 5261,
    5302, 5305, 5346, 5395, 5422, 5431, 5443, 5472, 5501, 5568, 5580, 5597,
    5640, 5650, 5662, 5679, 5713, 5779, 5815, 5875, 5900, 6022, 6088, 6212,
    6255, 6260, 6268, 6409, 6525, 6573, 6599, 6620, 6668, 6742, 6858, 6886,
    6904, 6955, 7012, 7038, 7126, 7191, 7311, 7350, 7353, 7401, 7462, 7487,
    7586, 7669, 7842, 7901, 7990, 8032, 8054, 8124, 8189, 8217, 8359, 8481,
    8531, 8596, 8636, 8650, 8735, 8776, 8782, 8862, 8887, 8938, 9067, 9083,
    9109, 9126, 9211, 9279, 9503, 9519, 9574, 9616, 9755, 9798, 9852, 9935,
    9962, 10029, 10100, 10174, 10255, 10348, 10410, 10461, 10561, 10613, 10663,
    10700, 10782, 10820, 10970, 11000, 11023, 11064, 11133, 11147, 11191, 11225,
    11264, 11335, 11382, 11419, 11436, 11495, 11634, 11680, 11745, 11781, 11806,
    11874, 11922, 11968, 12002, 12086, 12142, 12159, 12199, 12275, 12326, 12372,
    12438, 12474, 12548, 12573, 12688, 12728, 12768, 12776, 12811, 12881, 12921,
    12951, 12980, 12996, 13040, 13131, 13191, 13207, 13280, 13361, 13500, 13508,
    13622, 13788, 13963, 14001, 14027, 14032, 14056, 14100, 14160, 14185, 14233,
    14303, 14333, 14403, 14503, 14646, 14725, 14814, 14889, 14990, 15010, 15038,
    15045, 15104, 15166, 15222, 15240, 15299, 15343, 15386, 15433, 15496, 15510,
    15563, 15601, 15653, 15765, 15798, 15950, 15969, 16002, 16059, 16082, 16119,
    16173, 16356, 16407, 16473, 16507, 16707, 16725, 16796, 16934, 16971, 17046,
    17150, 17166, 17196, 17298, 17396, 17453, 17479, 17485, 17530, 17581, 17706,
    17777, 17831, 17858, 17981, 18007, 18049, 18125, 18150, 18200, 18221, 18245,
    18356, 18452, 18468, 18550, 18574, 18594, 18660, 18667, 18917, 18933, 18995,
    19054, 19078, 19241, 19314, 19399, 19409, 19419, 19529, 19559, 19577, 19625,
    19681, 19697, 19728, 19831, 19884, 19967, 20086, 20144, 20163, 20220, 20341,
    20364, 20398, 20442, 20512, 20551, 20611, 20696, 20835, 20906, 20953, 21055,
    21112, 21146, 21233, 21278, 21358, 21368, 21436, 21532, 21598, 21659, 21767,
    21793, 21833, 21844, 21878, 21896, 21936, 21979, 22010, 22017, 22063, 22082,
    22129, 22172, 22313, 22433, 22527, 22662, 22749, 22791, 22846, 22868, 22955,
    23003, 23063, 23087, 23167, 23171, 23193, 23281, 23303, 23319, 23340, 23447,
    23553, 23587, 23635, 23711, 23715, 23749, 23803, 23807, 23854, 23896, 23990,
    24027, 24097, 24111, 24171, 24306, 24376, 24457, 24546, 24555, 24726, 24746,
    24843, 24864, 24959, 25055, 25120, 25201, 25224, 25260, 25292, 25306, 25333,
    25399, 25430, 25449, 25583, 25677, 25724, 25833, 25854, 25910, 25962, 26070,
    26087, 26124, 26174, 26235, 26298, 26357, 26395, 26439, 26473, 26638, 26747,
    26911, 26942, 27046, 27159, 27199, 27289, 27300, 27326, 27451, 27488, 27655,
    27676, 27722, 27871, 28011, 28130, 28224, 28346, 28496, 28577, 28682, 28779,
    28808, 28895, 28900, 29042, 29080, 29114, 29194, 29293, 29338, 29436, 29472,
    29611, 29725, 29767, 29801, 29866, 29937,
  ])
);
