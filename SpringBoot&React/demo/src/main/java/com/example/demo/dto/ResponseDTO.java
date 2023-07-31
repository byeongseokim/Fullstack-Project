package com.example.demo.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResponseDTO<T> {
// 다른 모델의 DTO도 ResponseDTO를 이용해 리턴 할수 있도록 제네릭을 이용함
	private String error;
	private List<T> data;
}
