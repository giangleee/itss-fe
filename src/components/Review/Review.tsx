/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { Avatar, Button, Rating, TextField } from "@mui/material";
import "./style.scss";
import React, { useEffect } from "react";
import { createReview, getStaffById } from "../../api/request";
import { RatingType } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RequestList = () => {
  const { request_id, staff_id } = useParams();
  const [staff, setStaff] = React.useState<any>();
  const [rating, setRating] = React.useState<number>(0);
  const [comment, setComment] = React.useState<string>("");
  const [validateComment, setValidateComment] = React.useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(request_id, staff_id);
  }, []);

  useEffect(() => {
    const getorder = async () => {
      const response = await getStaffById(staff_id!);
      console.log(response);
      const { data: res } = response;

      setStaff(res?.data);
    };
    getorder();
  }, []);

  const calculate_age = (dob: any): number => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };

  const handleChangeRating = (e: any, newValue: any) => {
    setRating(newValue);
  };

  const handleChangeComment = (e: any) => {
    setComment(e.target.value);
    if (e.target.value.length >= 200) {
      setValidateComment(true);
    } else {
      setValidateComment(false);
    }
  };

  const onSubmitRatting = async () => {
    if(rating === 0){
      toast.error("評価を選んでください");
      return;
    }
    try {
      const payload = {
        user_id: "648f3b20908304001c871052",
        staff_id: staff._id,
        request_id: request_id,
        data: {
          ratting: rating,
          comment: comment,
        },
      };
      const { data } = await createReview(payload);
      if (data?.message == "Create review successfully") {
        console.log("thành công");
        toast.success("成功した!");
      }
    } catch (error) {
      console.log("lỗi");
      toast.error("エラー!");
    }
  };

  return (
    <div className="request__container w-100 bg-white h-[600px]">
      <div>
        <div className="h3 row text-center py-4">
          <b>レビュー</b>
        </div>
        <div className="row  w-100 my-3">
          <div className="col-3 align-self-center text-center  ps-5">
            <Avatar
              sx={{ width: 120, height: 120, margin: "auto" }}
              src={staff?.avatar}
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="d-flex w-100 justify-content-between">
                <b>{staff?.fullName}</b>
                {/* <small>ID: {staff._id}</small> */}
              </div>
            </div>
            <div className="row">
              <span>性別: {staff?.gender}</span>
            </div>
            <div className="row">
              <b>年: {calculate_age(staff?.date_of_birth)}</b>
            </div>
            <div className="row">
              <b>アドレス: {staff?.address}</b>
            </div>
            <div className="row w-100 ">
              <div className="col-6">
                <Rating
                  name="half-rating"
                  value={staff?.rating_avg ?? 0}
                  precision={0.5}
                  size="large"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row  w-100 my-3">
          <div className="col-3 text-center ps-5 align-self-center">
            <span className="h4 align-self-center">評価</span>
          </div>
          <div className="col-8">
            <Rating
              sx={{ fontSize: "5rem" }}
              name="half-rating"
              value={rating}
              precision={1}
              size="large"
              onChange={handleChangeRating}
            />
          </div>
        </div>
        <div className="row  w-100 my-3">
          <div className="col-3 text-center ps-5 align-self-center">
            <span className="h4 align-self-center">コメント</span>
          </div>
          <div className="col-8">
            <TextField
              sx={{
                "& .MuiFormHelperText-root": {
                  fontSize: "1.25rem",
                },
              }}
              error={validateComment}
              fullWidth
              multiline
              rows={4}
              helperText={validateComment ? "200文字まで" : null}
              value={comment}
              onChange={handleChangeComment}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="row  w-100 mb-3">
          <div className="d-flex justify-content-evenly me-0 pe-0 w-100">
            <Button
              sx={{
                fontSize: "1rem",
                width: "150px",
                height: "45px",
              }}
              disabled={validateComment}
              size="large"
              variant="contained"
              style={{
                backgroundColor: "#FF7008",
              }}
              onClick={onSubmitRatting}
            >
              レビュー
            </Button>
            <Button
              sx={{
                fontSize: "1rem",
                width: "150px",
                height: "45px",
              }}
              className="px-3"
              size="large"
              // onClick={() => navigate(`history/${request_id}`, {replace: true})}
              onClick={() => navigate(-1)}
              variant="outlined"
              style={{
                borderColor: "#FF7008",
              }}
            >
              バック
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestList;
