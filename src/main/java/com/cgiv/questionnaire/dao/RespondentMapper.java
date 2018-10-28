package com.cgiv.questionnaire.dao;

import com.cgiv.questionnaire.entity.Respondent;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RespondentMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Respondent record);

    int insertSelective(Respondent record);

    Respondent selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Respondent record);

    int updateByPrimaryKey(Respondent record);
}