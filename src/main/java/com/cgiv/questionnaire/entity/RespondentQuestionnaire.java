package com.cgiv.questionnaire.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class RespondentQuestionnaire {
    private Long id;

    private Long respondentId;

    private LocalDate recDate;

    private Short scoreTotal;

    private String answer;

    private Short questionnaireId;

    private Short dataStatus;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRespondentId() {
        return respondentId;
    }

    public void setRespondentId(Long respondentId) {
        this.respondentId = respondentId;
    }

    public LocalDate getRecDate() {
        return recDate;
    }

    public void setRecDate(LocalDate recDate) {
        this.recDate = recDate;
    }

    public Short getScoreTotal() {
        return scoreTotal;
    }

    public void setScoreTotal(Short scoreTotal) {
        this.scoreTotal = scoreTotal;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Short getQuestionnaireId() {
        return questionnaireId;
    }

    public void setQuestionnaireId(Short questionnaireId) {
        this.questionnaireId = questionnaireId;
    }

    public Short getDataStatus() {
        return dataStatus;
    }

    public void setDataStatus(Short dataStatus) {
        this.dataStatus = dataStatus;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }
}