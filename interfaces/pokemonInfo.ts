// Generated by https://quicktype.io

export interface Pokemon {
    abilities:                Ability[];
    base_experience:          null;
    forms:                    Species[];
    game_indices:             any[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    any[];
    name:                     string;
    order:                    number;
    past_types:               any[];
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Home };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Sprites {
    back_default:       null;
    back_female:        null;
    back_shiny:         null;
    back_shiny_female:  null;
    front_default:      null;
    front_female:       null;
    front_shiny:        null;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export interface RedBlue {
    back_default:      null;
    back_gray:         null;
    back_transparent:  null;
    front_default:     null;
    front_gray:        null;
    front_transparent: null;
}

export interface GenerationIi {
    crystal: Crystal;
    gold:    Gold;
    silver:  Gold;
}

export interface Crystal {
    back_default:            null;
    back_shiny:              null;
    back_shiny_transparent:  null;
    back_transparent:        null;
    front_default:           null;
    front_shiny:             null;
    front_shiny_transparent: null;
    front_transparent:       null;
}

export interface Gold {
    back_default:       null;
    back_shiny:         null;
    front_default:      null;
    front_shiny:        null;
    front_transparent?: null;
}

export interface GenerationIii {
    emerald:             Emerald;
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
}

export interface Emerald {
    front_default: null;
    front_shiny:   null;
}

export interface Home {
    front_default:      null;
    front_female:       null;
    front_shiny:        null;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: null;
    front_female:  null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number;
    type: Species;
}
