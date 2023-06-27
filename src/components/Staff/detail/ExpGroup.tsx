import { FC } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type ExpGroupProps = {
  age: number;
  company_exp: number;
  total_exp: number;
  skill: string | string[];
};
const ExpGroup: FC<ExpGroupProps> = ({ age, company_exp, total_exp, skill }) => {
  const navigate = useNavigate();
  const spreateSkill = (skill: string | string[]) => {
    if (typeof skill === "string") skill = skill.split(", ");
    return skill.map((item, index) => <li key={index}>{item}</li>);
  };
  return (
    <div className="w-5/12 flex-1 bg-transparent flex flex-col gap-3">
      <Paper
        className="flex p-3 items-center gap-3 text-blue-600 border-blue-500 border-r-4 hover:cursor-pointer hover:bg-slate-100 transition-all"
        onClick={() => navigate("review")}
      >
        <FontAwesomeIcon icon={faUser} />
        <Typography className="font-bold hover:font-extrabold">レビュー歴史</Typography>
      </Paper>
      <Paper className="flex-1 py-2.5 px-3">
        <Typography className="font-bold">自分取得スキル</Typography>
        <div className="font-extrabold">
          <ul className="list-disc pl-5 pt-2">{spreateSkill(skill)}</ul>
        </div>
      </Paper>
      <Paper className="py-2.5 px-3">
        <Typography className="font-bold">経験年数</Typography>
        <Typography className="font-extrabold">
          <span className="text-2xl">{company_exp}</span>年
        </Typography>
      </Paper>
      <Paper className="py-2.5 px-3">
        <Typography className="font-bold">年齢</Typography>
        <Typography className="font-extrabold">
          <span className="text-2xl">{age}</span>年
        </Typography>
      </Paper>
      <Paper className="py-2.5 px-3">
        <Typography className="font-bold">経験年数合計</Typography>
        <Typography className="font-extrabold">
          <span className="text-2xl">{total_exp}</span>年
        </Typography>
      </Paper>
    </div>
  );
};
export default ExpGroup;
