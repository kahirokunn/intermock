/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
enum Awesomeness {
  COOL,
  LAME
}

enum GreatNumbers {
  e = 2.71,
  pi = 3.14,
  golden = 1.61
}

enum GreatMusicians {
  mozart = 'Mozart',
  beethoven = 'Beethoven'
}

enum GreatNovels {
  MOBY_DICK,
  GRAPES_OF_WRATH,
  SLAUGHTERHOUSE_FIVE
}

interface Person {
  name: string;
  status: Awesomeness;
  favoriteNumber: GreatNumbers;
  favoriteMusicians: GreatMusicians;
  favoriteNovel: GreatNovels;
}

export const expectedEnum = {
  Person: {
    name:
        'Animi repellat eveniet eveniet dolores quo ullam rerum reiciendis ipsam. Corrupti voluptatem ipsa illum veritatis eligendi sit autem ut quia. Ea sint voluptas impedit ducimus dolores possimus.',
    status: 1,
    favoriteNumber: 3.14,
    favoriteMusicians: 'Beethoven',
    favoriteNovel: 1
  }
};