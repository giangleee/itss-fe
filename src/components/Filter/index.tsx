import { Autocomplete, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import type { FilterType, AgeType, GenderType, StarType } from "../../types";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FilterProps {
  onChange?: ({ gender, age, star }: FilterType) => void;
}
const Filter: FC<FilterProps> = ({ onChange }) => {
  const [filter, setFilter] = useState<FilterType>({});
  const handleSubmitFilter = () => {
    onChange?.(filter);
  };
  return (
    <div className="bg-transparent flex flex-row justify-end gap-3 items-stretch">
      <span className="w-10 flex justify-center items-center border-1 rounded border-gray-400">
        <FontAwesomeIcon icon={faSliders} />
      </span>
      <Autocomplete
        className="w-1/6"
        sx={{ height: "100%" }}
        size="small"
        getOptionLabel={(l) => l.label}
        options={
          [
            { label: "男性", value: "Male" },
            { label: "女性", value: "Female" },
            { label: "その他", value: "Other" },
          ] as { label: string; value: GenderType }[]
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="性別"
          />
        )}
        isOptionEqualToValue={(o, v) => o.value === v.value}
        onChange={(_, v) => setFilter({ ...filter, gender: v?.value })}
      />
      <Autocomplete
        className="w-1/6"
        size="small"
        getOptionLabel={(l) => l.label}
        options={
          [
            { label: "18代ー30代", value: 30 },
            { label: "31代ー45代", value: 45 },
            { label: "46代ー60代", value: 60 },
          ] as { label: string; value: AgeType }[]
        }
        isOptionEqualToValue={(o, v) => o.value === v.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label="年齢"
          />
        )}
        onChange={(_, v) => setFilter({ ...filter, age: v?.value })}
      />
      <Autocomplete
        className="w-1/6"
        size="small"
        getOptionLabel={(l) => l.label}
        options={
          [
            { label: "2+", value: 2 },
            { label: "3+", value: 3 },
            { label: "4+", value: 4 },
          ] as { label: string; value: StarType }[]
        }
        isOptionEqualToValue={(o, v) => o.value === v.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label="評価"
          />
        )}
        onChange={(_, v) => setFilter({ ...filter, star: v?.value })}
      />
      <Button
        className="w-1/6 bg-[#198754] text-base"
        variant="contained"
        color="success"
        onClick={handleSubmitFilter}
      >
        検索
      </Button>
    </div>
  );
};

export default Filter;
